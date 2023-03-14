export class YRightSelectItem extends HTMLElement {
    constructor() {
        super()

        this.setAttribute('class','right-select-item')

        let label = document.createElement('div')
        let content = document.createElement('div')
        label.innerText = this.getLabel()
        label.classList.add('right-label')

        content.innerHTML = this.innerHTML
        content.setAttribute('style','width: 100%;display: flex;')
        
        this.innerHTML = null
        this.appendChild(label)
        this.appendChild(content)

        let loadStyle = document.createElement('link')
        loadStyle.setAttribute('rel', 'stylesheet')
        loadStyle.setAttribute('href', './ui/right-select/right-select-item/right-select-item.css')
        //  let shadow = this.attachShadow({ mode: 'open' })
        //  shadow.appendChild(loadStyle)
        let head = document.getElementsByTagName('head')[0]
        head.appendChild(loadStyle)
    }

    getLabel() {
        return this.getAttribute('label')
    }
}