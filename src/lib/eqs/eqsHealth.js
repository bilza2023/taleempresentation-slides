import uuid from "../uuid";
import { availableEqsItems, availableEqsSpItems } from '../index';

function isFieldPresent(obj, fieldName, report, fix, options = {}) {
  const {
    defaultValue = '',
    errorMessage = `Missing ${fieldName}`,
    warningMessage,
    critical = false,
    validateFn = null
  } = options;

  const fieldExists = Object.prototype.hasOwnProperty.call(obj, fieldName);

  if (!fieldExists) {
    if (fix) {
      obj[fieldName] = defaultValue;
    } else {
      if (critical) {
        report.errors.push(errorMessage);
        report.result = false;
      } else if (warningMessage) {
        report.warnings.push(warningMessage);
      }
    }
  }

  if (fieldExists && validateFn) {
    const validationResult = validateFn(obj[fieldName]);
    if (!validationResult.valid) {
      report.errors.push(validationResult.message);
      report.result = false;
    }
  }

  return fieldExists;
}

function validateItemExtra(itemExtra, index, report) {
  const requiredItemExtraFields = ['startTime', 'endTime', 'code', 'type', 'sp'];

  requiredItemExtraFields.forEach(field => {
    isFieldPresent(itemExtra, field, report, false, {
      errorMessage: `Item ${index} itemExtra missing ${field}`,
      critical: true
    });
  });

  isFieldPresent(itemExtra, 'type', report, false, {
    validateFn: (type) => ({
      valid: availableEqsItems.includes(type),
      message: `Item ${index} invalid itemExtra type: ${type}`
    })
  });

  if (Array.isArray(itemExtra.sp)) {
    itemExtra.sp.forEach((spItem, spIndex) => {
      isFieldPresent(spItem, 'type', report, false, {
        validateFn: (type) => ({
          valid: availableEqsSpItems.includes(type),
          message: `Item ${index} sp item ${spIndex} has invalid type: ${type}`
        })
      });

      isFieldPresent(spItem, 'code', report, false, {
        errorMessage: `Item ${index} sp item ${spIndex} missing code`,
        critical: true
      });
    });
  }
}
//Brilliant
function validateItem(item, index, report, fix) {
  const fields = [
    { name: 'uuid', options: { defaultValue: uuid(), critical: true, errorMessage: `Item ${index} missing UUID` } },
    { name: 'name', options: { defaultValue: '' } },
    { name: 'content', options: { defaultValue: '' } },
    { name: 'showAt', options: { defaultValue: 0 } },
    { name: 'hideAt', options: { defaultValue: 0 } }
  ];

  fields.forEach(field => {
    isFieldPresent(item, field.name, report, fix, {
      ...field.options,
      warningMessage: field.options.warningMessage || `Item ${index} missing ${field.name}`
    });
  });
//////////////////////////////////////////////////////////
  isFieldPresent(item, 'itemExtra', report, false, {
    errorMessage: `Item ${index} missing itemExtra`,
    critical: true
  });

  if (item.itemExtra) {
    validateItemExtra(item.itemExtra, index, report);
  }
}

export default async function eqsHealth(slide, fix = false) {
  const report = { 
    errors: [], 
    warnings: [],  
    result: true 
  };

  const slideFields = [
    { name: 'uuid', options: { defaultValue: uuid(), critical: true, errorMessage: "Missing slide UUID" } },
    { name: 'slideExtra', options: { errorMessage: "Missing slideExtra", critical: true } },
    { name: 'items', options: { defaultValue: [], errorMessage: "Missing items array", critical: true } },
    { 
      name: 'type', 
      options: { 
        validateFn: (type) => ({
          valid: type === 'Eqs',
          message: "Invalid or missing slide type. Must be 'Eqs'"
        }),
        critical: true
      } 
    },
    { name: 'template', options: { defaultValue: '', warningMessage: "Template field missing" } },
    { name: 'version', options: { defaultValue: 'basic', critical: true, errorMessage: "Missing version" } }
  ];

  slideFields.forEach(field => {
    isFieldPresent(slide, field.name, report, fix, field.options);
  });

  if (slide.startTime !== 0) {
    if (fix) {
      slide.startTime = 0;
    } else {
      report.errors.push("StartTime must be 0");
      report.result = false;
    }
  }

  isFieldPresent(slide, 'endTime', report, false, {
    validateFn: (endTime) => ({
      valid: endTime > 0,
      message: "EndTime must exist and be greater than 0"
    }),
    critical: true
  });

  if (slide.items) {
    slide.items.forEach((item, index) => {
      validateItem(item, index, report, fix);
    });
  }

  return report;
}