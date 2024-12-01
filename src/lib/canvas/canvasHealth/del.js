

function compareItemExtra(itemType, existingExtra, template) {
  const report = { 
    missingRequiredFields: [],
    unexpectedFields: [],
    invalidFieldTypes: [],
    validationErrors: []
  };

  // Check for unexpected fields
  Object.keys(existingExtra).forEach(key => {
    if (!(key in template)) {
      report.unexpectedFields.push(key);
    }
  });

  // Check required and validate fields
  Object.keys(template).forEach(key => {
    const fieldTemplate = template[key];
    const existingValue = existingExtra[key];

    // Check for missing required fields
    if (fieldTemplate.required && existingValue === undefined) {
      report.missingRequiredFields.push(key);
    }

    // Validate field type
    if (existingValue !== undefined) {
      // Type checking
      if (typeof existingValue !== fieldTemplate.type) {
        report.invalidFieldTypes.push({
          field: key,
          expectedType: fieldTemplate.type,
          actualType: typeof existingValue
        });
      }

      // Custom validator if exists
      if (fieldTemplate.validator && typeof fieldTemplate.validator === 'function') {
        if (!fieldTemplate.validator(existingValue)) {
          report.validationErrors.push({
            field: key,
            value: existingValue
          });
        }
      }

      // Check for specific value (like for 'command')
      if (fieldTemplate.value && existingValue !== fieldTemplate.value) {
        report.validationErrors.push({
          field: key,
          expectedValue: fieldTemplate.value,
          actualValue: existingValue
        });
      }
    }
  });

  return report;
}

export async function canvasHealth(slide, fix = false) {
  const report = {
    messages: [],
    result: true,
    itemTypeReports: {}
  };

  // Slide-level validations (similar to previous implementation)
  // ... (keep existing slide-level checks)

  // Process each item
  slide.items.forEach((item, index) => {
    // Basic item validations (similar to previous implementation)
    // ... (keep existing item-level basic checks)

    // Detailed item extra validation
    if (item.itemExtra && item.itemExtra.command) {
      const itemType = item.itemExtra.command;
      
      if (ITEM_TYPE_TEMPLATES[itemType]) {
        const typeReport = compareItemExtra(
          itemType, 
          item.itemExtra, 
          ITEM_TYPE_TEMPLATES[itemType]
        );
        
        // Only add to reports if there are issues
        if (
          typeReport.missingRequiredFields.length ||
          typeReport.unexpectedFields.length ||
          typeReport.invalidFieldTypes.length ||
          typeReport.validationErrors.length
        ) {
          report.itemTypeReports[`${itemType}_${index}`] = typeReport;
          report.result = false;
        }
      } else {
        report.messages.push(`Unknown item type: ${itemType}`);
        report.result = false;
      }
    }
  });

  return report;
}