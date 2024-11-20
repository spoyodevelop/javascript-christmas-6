import { ERROR_MESSAGES } from '../config/defaultSettings.js';
import OutputView from '../src/OutputView.js';
import { isNumber } from '../Utility/regex.js';

function isValidNumber(input) {
  return isNumber.test(input);
}

function parseNumber(input) {
  return Number(input);
}

function isValidDate(input) {
  return Number(input) >= 1 && Number(input) <= 31;
}

export default function validateDateNumber(inputString) {
  if (!isValidNumber(inputString)) {
    OutputView.printMessage(
      '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
    );
    return null;
  }
  if (!isValidDate(inputString)) {
    OutputView.printMessage(
      `[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.`,
    );
    return null;
  }

  return parseNumber(inputString);
}
