export class YStepper extends HTMLElement {
    constructor() {
        super()

        let iframe = document.createElement('iframe')

        iframe.src = this.baseURI.replace('index.html', '') + 'ui/stepper/stepper.html'
        iframe.setAttribute('style', 'display:none;')
        let that = this
        iframe.onload = function load() {
            that.innerHTML = iframe.contentDocument.body.innerHTML

            let sub = that.getElementsByTagName('button')[0]
            let add = that.getElementsByTagName('button')[1]
            let num = that.getElementsByTagName('input')[0]

            if (num.value == 0) {
                sub.setAttribute('style', 'visibility: hidden;')
                num.setAttribute('style', 'visibility: hidden;')
            }

            let e
            add.addEventListener('click', event => {
                num.setAttribute('value', parseInt(num.value) + 1)
                num.removeAttribute('style')
                sub.removeAttribute('style')
                e = new CustomEvent('stepperNumberChange', {
                    detail: {
                        value: num.value
                    }
                })
                that.dispatchEvent(e)
            })
            sub.addEventListener('click', event => {
                num.setAttribute('value', parseInt(num.value) - 1)
                if (num.value == 0) {
                    sub.setAttribute('style', 'visibility: hidden;')
                    num.setAttribute('style', 'visibility: hidden;')
                }
                e = new CustomEvent('stepperNumberChange', {
                    detail: {
                        value: num.value
                    }
                })
                that.dispatchEvent(e)
            })
        }
        that.appendChild(iframe)
        let loadStyle = document.createElement('link')
        loadStyle.setAttribute('rel', 'stylesheet')
        loadStyle.setAttribute('href', './ui/stepper/stepper.css')
        //  let shadow = this.attachShadow({ mode: 'open' })
        //  shadow.appendChild(loadStyle)
        let head = document.getElementsByTagName('head')[0]
        head.appendChild(loadStyle)
    }
}