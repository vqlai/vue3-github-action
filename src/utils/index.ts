// 格式化时间
export const formatDate = (date: Date) => {
  const day = new Date(date)
  const y = day.getFullYear()
  const m = (day.getMonth() + 1).toString().padStart(2, '0')
  const d = day.getDate().toString().padStart(2, '0')
  const hh = day.getHours().toString().padStart(2, '0')
  const mm = day.getMinutes().toString().padStart(2, '0')
  const ss = day.getSeconds().toString().padStart(2, '0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 水印处理函数
export const handleWaterMark = async () => {
  const wm = document.querySelector('.watermark')
  const wmChild = document.querySelector('.watermark div')
  const wmDom = wm.cloneNode(true)
  const wmChildDom = wmChild.cloneNode(true)
  const wmDomStyle = wm.getAttribute('style')
  const wmChildDomStyle = wmChild.getAttribute('style')
  const observer = new MutationObserver(() => {
    const wm = document.querySelector('.watermark')
    const wmChild = document.querySelector('.watermark div')
    if (!wm) {
      console.log(wmDom)
      document.querySelector('.layout-wrapper')?.appendChild(wmDom)
    } else if (!wmChild) {
      console.log(wmChildDom)
      wm.appendChild(wmChildDom)
    } else {
      if (wm.getAttribute('style') !== wmDomStyle) {
        console.log('wmDomStyle', wmDomStyle)
        wm.setAttribute('style', wmDomStyle)
      }
      if (wmChild.getAttribute('style') !== wmChildDomStyle) {
        wmChild.setAttribute('style', wmChildDomStyle)
      }
    }
  })
  observer.observe(document.querySelector('.layout-wrapper'), {
    childList: true,
    attributes: true,
    subtree: true,
  })
}
