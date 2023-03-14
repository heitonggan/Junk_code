export class YLeftSelect extends HTMLElement {
    constructor() {
        super()

        this.setAttribute('class', 'left-select')
        let scroll = new BScroll(this , {
            scrollY: true,
            click: true
        })

        let left_select_item = this.getElementsByTagName('y-left-select-item')
        // console.log(left_select_item);
        let arr = Array.from(left_select_item)

        if (this.getValue() != null && this.getValue() != '') {
            setTimeout(() => {
                let previous = arr.indexOf(left_select_item.namedItem(this.getValue()), 0) - 1
                this.addCSSClass(previous)
            })
            this.addEventListener('click', event => {
                let t = document.elementFromPoint(event.clientX, event.clientY)
                setTimeout(() => {
                    let previous = arr.indexOf(left_select_item.namedItem(this.getValue()), 0) - 1
                    left_select_item.namedItem(this.getValue()).children[0].classList.remove('left-select-item-content--active')
                    left_select_item.namedItem(this.getValue()).children[0].children[0].classList.remove('left-select-item-content--active')
                    if (previous != -1)
                        left_select_item[previous].getElementsByTagName('div')[0].removeAttribute('style')
                    left_select_item.namedItem(this.getValue()).getElementsByTagName('div')[0].classList.remove('left-select-item-content--active')
                    this.setAttribute('value', t.parentElement.parentElement.getAttribute('name'))
                    previous = arr.indexOf(left_select_item.namedItem(this.getValue()), 0) - 1
                    this.addCSSClass(previous)

                    /**
                     * 派发事件
                     */
                    let rightSelect = document.getElementsByName(this.getContent())[0]
                    let event = new CustomEvent('content', {
                        detail: {
                            element: this,
                            content: this.getContent(),
                            value: this.getValue()
                        }
                    })
                    rightSelect.dispatchEvent(event)
                });
            })
        }
        else
            left_select_item[0].classList.add('left-select-item-content--active')

        let loadStyle = document.createElement('link')
        loadStyle.setAttribute('rel', 'stylesheet')
        loadStyle.setAttribute('href', './ui/left-select/left-select.css')
        //  let shadow = this.attachShadow({ mode: 'open' })
        //  shadow.appendChild(loadStyle)
        let head = document.getElementsByTagName('head')[0]
        head.appendChild(loadStyle)
    }

    getValue() {
        return this.getAttribute('value')
    }

    getContent() {
        return this.getAttribute('content')
    }

    addCSSClass(previous) {
        let left_select_item = this.getElementsByTagName('y-left-select-item')
        left_select_item.namedItem(this.getValue()).children[0].classList.add('left-select-item-content--active')
        left_select_item.namedItem(this.getValue()).children[0].children[0].classList.add('left-select-item-content--active')
        if (previous != -1)
            left_select_item[previous].getElementsByTagName('div')[0].setAttribute('style', 'border: none;')
        left_select_item.namedItem(this.getValue()).getElementsByTagName('div')[0].classList.add('left-select-item-content--active')
    }
}