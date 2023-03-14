export class YTag extends HTMLElement {
    constructor() {
        super()

        if (this.getType() != null && this.getType() != '')
            this.setAttribute('class', this.getType())
        else
            this.setAttribute('class', 'success')

        if(this.getEffect() != null && this.getEffect() == 'dark')
            this.classList.add(this.getType()+'-dark')
        
        let loadStyle = document.createElement('link')
        loadStyle.setAttribute('rel', 'stylesheet')
        loadStyle.setAttribute('href', './ui/tag/tag.css')
        let head = document.getElementsByTagName('head')[0]
        head.appendChild(loadStyle)
    }

    getType() {
        return this.getAttribute('type')
    }

    getEffect() {
        return this.getAttribute('effect')
    }
}