export class YLeftSelectItem extends HTMLElement{
    constructor(){
        super()

        let box = document.createElement('div')
        let box2 = document.createElement('div')

        box.innerHTML = this.innerHTML
        this.innerHTML = null
        // this.setAttribute('style','width: 100%')
        // box.setAttribute('class','left-select-item')
        box.classList.add('left-select-item-content')
        box2.classList.add('left-select-item')

        box2.appendChild(box) 
        this.appendChild(box2)

        let loadStyle = document.createElement('link')
        loadStyle.setAttribute('rel', 'stylesheet')
        loadStyle.setAttribute('href', './ui/left-select/left-select-item/left-select-item.css')
        //  let shadow = this.attachShadow({ mode: 'open' })
        //  shadow.appendChild(loadStyle)
        let head = document.getElementsByTagName('head')[0]
        head.appendChild(loadStyle)
    }
}