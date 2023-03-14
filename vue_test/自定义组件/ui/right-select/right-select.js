export class YRightSelect extends HTMLElement {
    constructor() {
        super()

        this.setAttribute('class', 'right-select')
        let scroll = new BScroll(this, {
            scrollY: true,
            click: true
        })
        this.addEventListener('content', event => {
            if (event.detail.content != this.getName())
                return

            scroll.refresh()
            let item = this.children[0].children.namedItem(event.detail.value)
            scroll.scrollToElement(item, 300)
        })

        let loadStyle = document.createElement('link')
        loadStyle.setAttribute('rel', 'stylesheet')
        loadStyle.setAttribute('href', './ui/right-select/right-select.css')
        //  let shadow = this.attachShadow({ mode: 'open' })
        //  shadow.appendChild(loadStyle)
        let head = document.getElementsByTagName('head')[0]
        head.appendChild(loadStyle)
    }

    getName() {
        return this.getAttribute('name')
    }
}