// TODO 转换单位 MB GB 
export const changeSizeFn = (input) => {
    let size = ''
    if (input < 0.1 * 1024) { // 小于0.1KB，则转化成B
        size = `${input.toFixed(2)}B`
    } else if (input < 0.1 * 1024 * 1024) { // 小于0.1MB，则转化成KB
        size = `${(input / 1024).toFixed(2)}KB`
    } else if (input < 0.1 * 1024 * 1024 * 1024) { // 小于0.1GB，则转化成MB
        size = `${(input / (1024 * 1024)).toFixed(2)}MB`
    } else { // 其他转化成GB
        size = `${(input / (1024 * 1024 * 1024)).toFixed(2)}GB`
    }
    return isZeroEnd(size)
}

// TODO 转换单位 MB GB 
export const changeSizeFnWithPlus = (input) => {
    let size = ''
    if (input < 0.1 * 1024) { // 小于0.1KB，则转化成B
        size = `${input.toFixed(2)}-B`
    } else if (input < 0.1 * 1024 * 1024) { // 小于0.1MB，则转化成KB
        size = `${(input / 1024).toFixed(2)}-KB`
    } else if (input < 0.1 * 1024 * 1024 * 1024) { // 小于0.1GB，则转化成MB
        size = `${(input / (1024 * 1024)).toFixed(2)}-MB`
    } else { // 其他转化成GB
        size = `${(input / (1024 * 1024 * 1024)).toFixed(2)}-GB`
    }
    return isZeroEnd(size)
}

export const thousandMark = (input) => {
    return input.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

export const changeSizeToMb = (input) => {
    const size = `${(input / (1024 * 1024)).toFixed(2)}`
    return isZeroEnd(size)
}

export const changeSizeToGb = (input) => {
    const size = `${(input / (1024 * 1024 * 1024)).toFixed(2)}`
    return isZeroEnd(size)
}

const isZeroEnd = (input) => {
    const sizeStr = `${input}`
    const index = sizeStr.indexOf('.')
    const double = sizeStr.substr(index + 1, 2)
    if (double === '00') { // 判断后两位是否为00，如果是则删除00                
        return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
    }
    return sizeStr
}

// TODO 转换单位 带千分符
export const changeSizeWithMarkFn = (input) => {
    let size = ''
    if (input < 0.1 * 1024) { // 小于0.1KB，则转化成B
        size = `${thousandMark(input.toFixed(2))}B`
    } else if (input < 0.1 * 1024 * 1024) { // 小于0.1MB，则转化成KB
        size = `${thousandMark((input / 1024).toFixed(2))}KB`
    } else if (input < 0.1 * 1024 * 1024 * 1024) { // 小于0.1GB，则转化成MB
        size = `${thousandMark((input / (1024 * 1024)).toFixed(2))}MB`
    } else { // 其他转化成GB
        size = `${thousandMark((input / (1024 * 1024 * 1024)).toFixed(2))}GB`
    }
    return isZeroEnd(size)
}