module.exports = function toReadable(number) {
    let numberWords = {
        '0': '',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety'
    }
    if (number == 0) return 'zero'
    else {
        let num = number.toString().split('')

        if (num.length == 3) {
            let hundred = num[0]
            let ten = num[1]
            let unit = num[2]

            if (ten == '0') {
                ten = '0'
            }
            else {
                if (ten == '1') {
                    ten += unit
                    unit = '0'
                }
                else ten += '0'
            }
            let result = `${numberWords[hundred]} hundred ${numberWords[ten]}`
            result.trim()
            result += ` ${numberWords[unit]}`
            return result.trim()
        }

        if (num.length == 2) {
            let ten = num[0]
            let unit = num[1]

            if (ten == '1') {
                ten += unit
                unit = '0'
            }
            else ten += '0'
            let result = `${numberWords[ten]} ${numberWords[unit]} `
            return result.trim()
        }

        if (num.length == 1) {
            let unit = num[0]
            let result = `${numberWords[unit]}`
            return result
        }
    }

    return result
}
