/**
 * Черепашке нужно забраться на вершину холма. 
 * Расстояние от подножия холма до его вершины - 100м. 
 * Черепашка за день залезает вверх по холму на 50м. 
 * Ночью она спит и скатывается на 30м вниз. 
 * На какие сутки черепашка залезет на столб? 
 */


/**
 * First question, turtle
 * @param {object} params
 * @param {number} [params.height = 100] - reachable height
 * @param {number} [params.sliding = 30] - how much turtle squeez down on each iteration
 * @param {number} [params.speed = 50] - how high turle climb per day
 * @returns {number} amount of days wich are required to reach the height
 */
const firstQuestion = ({
  height = 100,
  speed = 50,
  sliding = 30,
}) => {
  let currentHeight = 0;
  for (let i = 1; ; i++) {
    currentHeight += speed
    if (currentHeight >= height) {
      return i
    }
    currentHeight -= sliding
  }
}

const res1 = firstQuestion({})

console.log("days:", res1)

/**
 * В комнате находится человек.
 * Через какое-то время в комнату заходит еще один человек и здоровается с первым. 
 * Людей в комнате становится 2, а счетчик рукопожатий становится равен 1. 
 * Через какое-то время заходит еще один человек и здоровается с другими людьми в комнате. 
 * Людей в комнате - 3 и счетчик рукопожатий - 3. И т.д. 
 * Требуется написать код для подсчета кол-ва рукопожатий для 10 человек и дать ответ.
 */

/**
 * Second question
 * @param {object} params
 * @param {number} [params.totalPesonsAmount = 10]
 * @param {number} [params.startPersonsAmount = 1] - сколько человек изначально было в офисе
 * @returns {number} number of total handshakes
 */
const secondQuestion = ({
  totalPesonsAmount = 10,
  startPersonsAmount = 1
}) => {
  let handshakes = 0
  let i = startPersonsAmount > 0 ? startPersonsAmount : 1;
  for (i; i < totalPesonsAmount; i++) {
    handshakes += i - 1
  }
  return handshakes
}

const res2 = secondQuestion({})
console.log("handshakes:", res2)


/**
 * Есть строка с большим кол-вом слов через запятую (например: "кошка,собака,лошадь,корова,кошка..."). 
 * Известно, что в строке встречаются повторяющиеся слова. 
 * Нужно написать функцию на JS. 
 * На вход передаются строка с дублями, а на выходе мы получаем строку без дублей.
 */

/**
 * Third question first solution
 * @param {string} str - string with duplicates
 * @returns {string} string without duplicates
 */
const thirdQuestionFirst = (str) => {
  //remove spaces from string
  str = str.replace(/\s*,\s*/, ',')

  const hsMap = new Map();
  const strArr = str.split(',');

  const newStrArr = strArr.filter((v) => {
    if (hsMap.has(v)) {
      return false
    }

    hsMap.set(v, true);
    return true
  })

  return newStrArr.join(",")
}

/**
 * Third question second solution
 * @param {string} str - string with duplicates
 * @returns {string} string without duplicates
 */
const thirdQuestionSecond = (str) => {
  str = str.replace(/\s*,\s*/, ',')

  return str.split(',').filter(function(value, index, arr) {
    return arr.indexOf(value) === index;
  }).join(',');
}


const res3 = thirdQuestionSecond("кошка,собака,лошадь,корова,кошка")

console.log("3 question:", res3)
