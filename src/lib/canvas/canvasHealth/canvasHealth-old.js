
const ITEM_TYPE_TEMPLATES = {
  text: { text: "", x: 0, y: 0, fontSize: 20, fontFamily: "Arial", font: "20px Arial", color: "black" },
  piechart: { x: 0, y: 0, radius: 50, data: [], color: "red" },
  image: { src: "", x: 0, y: 0, width: 100, height: 100, ext: "jpg" },
  sprite: { spriteId: "", sheet: "", sheetItem: "", x: 0, y: 0, width: 1, height: 1 },
  angleSymbol: { x: 0, y: 0, radius: 25, ticks: 3, startAngle: -90, endAngle: 0, lineWidth: 1, showOrigin: true },
  dot: { x: 0, y: 0, label: "", dot_width: 10, text_color: "black", text_size: 12, fill: true },
  icon: { text: "", x: 0, y: 0, fontSize: 20, iconSize: 50, icon: "🔬", showBg: false },
  ray: { x0: 0, y0: 0, x1: 0, y1: 0, lineWidth: 1, arrowWidth: 8, arrowHeight: 12 },
  triangle: { x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0, lineWidth: 1, filled: false },
  para: { text: "", x: 0, y: 0, fontSize: 20, font: "20px Arial", lineHeightOffset: 10 },
  ellipse: { x: 0, y: 0, radiusX: 50, radiusY: 25, rotation: 0, startAngle: 0, endAngle: 360, lineWidth: 1, fill: true },
  circle: { x: 0, y: 0, radius: 50, startAngle: 0, endAngle: 360, fill: true, lineWidth: 1 },
  rect: { x: 0, y: 0, width: 100, height: 100, filled: true, lineWidth: 1 }
};

const DEFAULT_SLIDE_EXTRA = {
  backgroundColor: "#044810",
  canvasWidth: 1000,
  canvasHeight: 360,
  cellHeight: 25,
  cellWidth: 25,
  bgImg: "system_images/bg_images/black_mat.jpg",
  bgGlobalAlpha: 1,
  xFactor: 0,
  yFactor: 0,
  showGrid: false,
  gridLineWidth: 1,
  gridLineColor: "gray"
};

function compareItemExtra(itemType, existingExtra, template) {
  const report = { missingFields: [], extraFields: [], status: "item is ok" };

  // Identify missing fields
  Object.keys(template).forEach(key => {
      if (!(key in existingExtra)) {
          report.missingFields.push(key);
      }
  });

  // Identify extra fields
  Object.keys(existingExtra).forEach(key => {
      if (!(key in template)) {
          report.extraFields.push(key);
      }
  });

  if (report.missingFields.length || report.extraFields.length) {
      delete report.status; // Remove "item is ok" if there are issues
  }

  return report;
}

export default async function canvasHealth(slide, fix = false) {
  const report = {
      messages: [],
      result: true,
      itemTypeReport: {}
  };

  // 1. Check and fix slide version
  if (!slide.version) {
      if (fix) slide.version = "basic";
      report.messages.push("Missing slide version");
  }

  // 2. Check and fix start and end times
  if (!slide.startTime || !slide.endTime) {
      if (fix) {
          slide.startTime = slide.startTime || 0;
          slide.endTime = slide.endTime || 3;
      }
      report.messages.push("Missing start or end times");
  }

  // 3. Check timing
  if (slide.startTime >= slide.endTime) {
      report.messages.push("Timing Error: Start time must be less than end time");
      report.result = false;
  }

  // 4. Ensure items array exists
  if (!slide.items) {
      if (fix) slide.items = [];
      report.messages.push("Missing items array");
  }

  // 5. Check slideExtra
  if (!slide.slideExtra) {
      if (fix) slide.slideExtra = { ...DEFAULT_SLIDE_EXTRA };
      report.messages.push("Missing slideExtra");
  } else {
      // 6. Fill in missing slideExtra fields
      Object.keys(DEFAULT_SLIDE_EXTRA).forEach(key => {
          if (!(key in slide.slideExtra)) {
              if (fix) slide.slideExtra[key] = DEFAULT_SLIDE_EXTRA[key];
              report.messages.push(`Missing slideExtra field: ${key}`);
          }
      });
  }

  // Process each item
  slide.items.forEach((item, index) => {
      if (!item.itemExtra) {
          report.messages.push(`Item ${index} missing itemExtra: old/non-upgraded data`);
          report.result = false;
          return;
      }

      const itemType = item.itemExtra.command;
      if (!ITEM_TYPE_TEMPLATES[itemType]) {
          report.messages.push(`Unknown item type: ${itemType}`);
          report.result = false;
      } else {
          const typeReport = compareItemExtra(
              itemType,
              item.itemExtra,
              ITEM_TYPE_TEMPLATES[itemType]
          );

          if (typeReport.status === "item is ok") {
              report.messages.push(`Item ${index} is ok`);
          } else {
              if (!report.itemTypeReport[itemType]) {
                  report.itemTypeReport[itemType] = [];
              }
              report.itemTypeReport[itemType].push({
                  itemIndex: index,
                  ...typeReport
              });
          }
      }
  });

  return report;
}
