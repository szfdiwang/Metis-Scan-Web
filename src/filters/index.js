export const numFormat = (value) => {
    if (!value) return '0'
    if (isNaN(value)) return '0'
    var intPart = Number(value)
    var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
    return intPartFormat
}