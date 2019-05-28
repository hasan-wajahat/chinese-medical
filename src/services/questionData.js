/**
 * keys for questions, saving in constant
 * makes it easier to change questions and
 * answers
 */
export const TONGUE_COLOR_OF_TONGUE = 'tongueColorOfTongue';
export const TONGUE_COLOR_OF_TONGUE2 = 'tongueColorOfTongue2';
export const TONGUE_COLOR_OF_TONGUE3 = 'tongueColorOfTongue3';
export const TONGUE_COLOR_OF_TONGUE4 = 'tongueColorOfTongue4';

/**
 * Options for all questions,
 * it will be used to getOptions for questions
 * and for showing options in answers
 */
export const options = {
  [TONGUE_COLOR_OF_TONGUE]: {
    red: 'Red Color',
    orange: 'orange',
  },
  [TONGUE_COLOR_OF_TONGUE2]: {
    red: 'RED',
    orange: 'orange',
  },
  [TONGUE_COLOR_OF_TONGUE3]: {
    red: 'red',
    orange: 'orange',
  },
  [TONGUE_COLOR_OF_TONGUE4]: {
    red: 'red',
    orange: 'orange',
  },
};

/**
 * @param {string} key key of the given questions
 * @return array of options for selectInput
 */
export function getOptions(key) {
  const option = options[key];
  return Object.keys(option).map(value => ({
    label: option[value],
    value,
  }));
}
