export class YCard extends HTMLElement {
    constructor() {
        super()

        this.classList.add('card')
        if (this.childElementCount >= 1) {
            for (let i = 0; i < this.childElementCount; i++){
                this.children[i].classList.add('card-content')
                this.children[i].classList.add('card-flex')
            }
            this.lastElementChild.classList.remove('card-content')
        }
        let loadStyle = document.createElement('link')
        loadStyle.setAttribute('rel', 'stylesheet')
        loadStyle.setAttribute('href', './ui/card/card.css')
        //  let shadow = this.attachShadow({ mode: 'open' })
        //  shadow.appendChild(loadStyle)
        let head = document.getElementsByTagName('head')[0]
        head.appendChild(loadStyle)
    }
}