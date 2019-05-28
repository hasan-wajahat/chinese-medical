import { resultData } from './resultData';
import { options } from './questionData';

/**
 * creates results array using saved answers and their
 * corresponding results
 * @param {object} properties the saved answers in form key value pairs
 * @return {array} array of strings
 */
export function getAnswers(properties) {
  const answerList = [];
  Object.entries(properties).forEach(([key, value]) => {
    const data = resultData[key];
    answerList.push(
      `${data.shortHand}: ${options[key][value]} -> ${data.results[value]}`,
    );
  });
  return answerList;
}
