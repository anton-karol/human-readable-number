module.exports = function toReadable(number) {
    let str1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let str2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let arr = [];
    if (number === 0) return 'zero';
    if (number >= 100) arr.push(str1[Math.trunc(number / 100)] + ' hundred');
    if (number % 100 < 20) {
        arr.push(str1[number % 100]);
    } else {
        arr.push(str2[Math.trunc((number % 100) / 10)], str1[number % 10]);
    }
    return arr.join(' ').trim();
}
