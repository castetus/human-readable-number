module.exports = function toReadable (number) {
  const ones = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
  ]
  const tens = [
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ]

  if (number === 0){
    return 'zero'
  }

  const arrNumber = number.toString().split('').reverse()

const resultArr = []

for (let i = 1; i <= arrNumber.length; i++){
  const rank = arrNumber[i - 1]
  if (rank === '0'){
    continue
  }
  switch (i){
    case 1:
      if (arrNumber[1] === '1'){
        resultArr.unshift(ones[+rank - 1 + 10])
        i++
      } else {
        resultArr.unshift(ones[+rank - 1])
      }
      break
    case 2:
      resultArr.unshift(tens[+rank - 1])
      break
    case 3:
      resultArr.unshift(ones[+rank - 1] + ' hundred')
      break

  }
  
}

  return resultArr.join(' ').trim()
}