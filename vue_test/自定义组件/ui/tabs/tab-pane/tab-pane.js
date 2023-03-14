export class YTabPane extends HTMLElement {
    constructor() {
        super()

        let box = document.createElement('div')
        let content = document.createElement('div')

        content.innerHTML = this.innerHTML
        this.innerHTML = null

        box.setAttribute('class', 'y-tab-pane')
        content.setAttribute('class','y-tab-pane-item')
        this.setAttribute('class', 'y-tab-pane')
        box.innerText = this.getLabel()
        /**
         * 创建css样式
         */
        var loadStyle = document.createElement('link')
        loadStyle.setAttribute('rel', 'stylesheet')
        loadStyle.setAttribute('href', './ui/tabs/tab-pane/tab-pane.css')

        //  let shadow = this.attachShadow({ mode: 'open' })

        //  shadow.appendChild(loadStyle)
        //  shadow.appendChild(box)
        this.appendChild(box)
        this.appendChild(content)

        let head = document.getElementsByTagName('head')[0]
        head.appendChild(loadStyle)
    }

    getLabel(){
        return this.getAttribute('label')
    }
}