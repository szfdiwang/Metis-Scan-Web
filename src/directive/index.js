import Vue from 'vue'

Vue.directive('countup', {
    // bind 时，无法取到最新的值
  componentUpdated: (el, binding, vnode) => {
    // 只调用一次
    if (el.getAttribute('countup')) {
      return
    }
    el.setAttribute('countup', true)

    // 在原元素上修改后数据不响应了
    const cloneEl = el.cloneNode(true)
    el.style.display = 'none'
    el.parentNode.insertBefore(cloneEl, el)

    const old = cloneEl.innerText
    const [, num, , isFloat, unit] = old.toString().replace(/,/g, '').match(/(\d*)(\.?(\d*))(\w*)?/)
    // eslint-disable-next-line eqeqeq
    if (num == 0 && !num) {
      return
    }
    // 变化速率
    const stepSize = [0.1, 0.35, 0.6, 0.7, 0.78, 0.83, 0.89, 0.93, 0.96]
    let count = 0
    let oldIntNum = -1
    const step = () => {
      const index = Math.floor(count / 10)
      if (index < stepSize.length) {
        const intNum = Math.floor(num * (stepSize[index] + '' + count++))
        if (intNum !== oldIntNum) {
          oldIntNum = intNum
          cloneEl.innerText = intNum + (isFloat ? '.' + Math.random().toString().slice(2, 4) : '') + (unit || '')
        }
        window.requestAnimationFrame(step)
      } else {
        el.style.display = ''
        cloneEl.parentNode.removeChild(cloneEl)
      }
    }
    window.requestAnimationFrame(step)
  }
})
