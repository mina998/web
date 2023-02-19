// GTM事件版, 必须先添加GTM追踪代码 
// 设置标题
let title = 'AFIBODY.COM'
// 标题链接
let link = 'https://www.baidu.com'
// Logo图片 宽50px 高24px (转换成datauri格式)
let logo = 'data:image/png;base64,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'

class Tidio2{
    constructor(){
        // 替换标志定时器
        this.timer = setInterval(this.replace.bind(this), 10)
        this.track = setInterval(this.tracking.bind(this), 50)
    }
    replace(){
        // find tidio iframe
        this.iframe = document.querySelector('#tidio-chat iframe')
        if(!this.iframe){
            return false
        }
        // find tidio powered
        let tdo = this.iframe.contentDocument.querySelector('a[href*="tidio.com/powered"]')
        if(tdo){
            tdo.href = link
            tdo.innerHTML = '<span>'+ title +'</span> <img src="' + logo + '" width="50" height="24" />'
        }
    }
    tracking(){
        // find tidio iframe
        this.iframe = document.querySelector('#tidio-chat iframe')
        if(!this.iframe){
            return false
        }
        let email = this.iframe.contentDocument.querySelector('input[type="email"][class="disabled"]')
        if(email){
            dataLayer.push({ 'event': 'tidio', 'conversionEmail': email })
            clearInterval(this.track)
        }
    }
}
new Tidio2()
