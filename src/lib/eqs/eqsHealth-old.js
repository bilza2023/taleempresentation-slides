

import {availableEqsItems , availableEqsSpItems} from '../index';
import uuid from "../uuid";

export default async function eqsHealth(slide, fix = false) {
  
  const report = { 
    messages: [], 
    errors: [], 
    result: true 
  };

  // Check slide-level fields
  if (!slide.uuid) {
    if (fix) {
      slide.uuid = uuid();
    } else {
      report.errors.push("Missing slide UUID");
      report.result = false;
    }
  }

  // Check slideExtra
  if (!slide.slideExtra) {
    report.errors.push("Missing slideExtra");
    report.result = false;
  }

  // Check items array
  if (!slide.items) {
    if (fix) {
      slide.items = [];
    } else {
      report.errors.push("Missing items array");
      report.result = false;
    }
  }

  // do not fix missing slide.type this is a big problem
  if (!slide.type || slide.type !== 'Eqs') {
      report.errors.push("Invalid or missing slide type. Must be 'Eqs'");
      report.result = false;
  }

  // Check template (can be empty)
  if (!('template' in slide)) {
    if (fix) {
      slide.template = '';
    }else {
      report.warning.push("template field missing");   
    }
  }

  // Check version
  if (!slide.version) {
    if (fix) {
      slide.version = 'basic';
    } else {
      report.errors.push("Missing version");
      report.result = false;
    }
  }

  // Check startTime
  if (slide.startTime !== 0) {
    if (fix) {
      slide.startTime = 0;
    } else {
      report.errors.push("StartTime must be 0");
      report.result = false;
    }
  }

  // Check endTime
  if (!slide.endTime || slide.endTime <= 0) {
    report.errors.push("EndTime must exist and be greater than 0");
    report.result = false;
  }

  // Check each item
  slide.items.forEach((item, index) => {
    // Check item-level required fields
    if (!item.uuid) {
      if (fix) {
        item.uuid = uuid();
      } else {
        report.errors.push(`Item ${index} missing UUID`);
      }
    }

    // Ensure name exists (can be empty string)
    if (!('name' in item)) {
      if (fix) {
        item.name = '';
      }else {
        report.warning.push(`Item ${index} missing name`);  
      }
    }

    // Ensure content exists (can be empty string)
    if (!('content' in item)) {
      if (fix) {
        item.content = '';
      }else {
        report.warning.push(`Item ${index} missing content`);  
      }
    }

    // Ensure showAt is 0
    if (!('showAt' in item)) {
      if (fix) {
        item.showAt = 0;
      } else {
        report.warning.push(`Item ${index} missing showAt`);
      }
    }
  
    if (!('hideAt' in item)) {
      if (fix) {
        item.hideAt = 0;
      } else {
        report.warning.push(`Item ${index} missing hideAt`);
      }
    }

    // Check itemExtra
    if (!item.itemExtra) {
      report.errors.push(`Item ${index} missing itemExtra`);
      report.result = false;
      return;
    }

    // Validate itemExtra structure
    const itemExtra = item.itemExtra;
    const requiredItemExtraFields = ['startTime', 'endTime', 'code', 'type', 'sp'];

    requiredItemExtraFields.forEach(field => {
      if (!(field in itemExtra)) {
        report.errors.push(`Item ${index} itemExtra missing ${field}`);
        report.result = false;
      }
    });

    // Validate itemExtra type
    if (itemExtra.type && !availableEqsItems.includes(itemExtra.type)) {
      report.errors.push(`Item ${index} invalid itemExtra type: ${itemExtra.type}`);
      report.result = false;
    }

    // Validate sp (side panel)
    if (Array.isArray(itemExtra.sp)) {
      itemExtra.sp.forEach((spItem, spIndex) => {
        if (!spItem.type || !availableEqsSpItems.includes(spItem.type)) {
          report.errors.push(`Item ${index} sp item ${spIndex} has invalid type: ${spItem.type}`);
          report.result = false;
        }

        if (!spItem.code) {
          report.errors.push(`Item ${index} sp item ${spIndex} missing code`);
          report.result = false;
        }
      });
    }
  });

  return report;
}