export class YTabs extends HTMLElement {
    constructor() {
        super()
        let tab_pane = this.getElementsByTagName('y-tab-pane')
        if (this.getValue() != null && this.getValue() != '') {
            setTimeout(() => {
                tab_pane.namedItem(this.getValue()).getElementsByTagName('div')[0].classList.add('y-tab-pane--active')
                tab_pane.namedItem(this.getValue()).getElementsByTagName('div')[1].classList.add('y-tab-pane-item--active')
            });
            this.addEventListener('click', (event) => {
                let t = document.elementFromPoint(event.clientX, event.clientY)
                if(t.parentElement.nodeName != 'Y-TAB-PANE')
                    return
                setTimeout(() => {
                    tab_pane.namedItem(this.getValue()).getElementsByTagName('div')[0].classList.remove('y-tab-pane--active')
                    tab_pane.namedItem(this.getValue()).getElementsByTagName('div')[1].classList.remove('y-tab-pane-item--active')
                    t.classList.add('y-tab-pane--active')
                    this.setAttribute('value', t.parentElement.getAttribute('name'))
                    tab_pane.namedItem(this.getValue()).getElementsByTagName('div')[1].classList.add('y-tab-pane-item--active')
                    // console.log(t.parentElement);
                });
            })
        }
        else
            tab_pane[0].getElementsByTagName('div')[0].classList.add('y-tab-pane--active')

        this.setAttribute('class', 'y-tabs')
        /**
         * 创建css样式
         */
        let loadStyle = document.createElement('link')
        loadStyle.setAttribute('rel', 'stylesheet')
        loadStyle.setAttribute('href', './ui/tabs/tabs.css')
        //  let shadow = this.attachShadow({ mode: 'open' })
        //  shadow.appendChild(loadStyle)
        let head = document.getElementsByTagName('head')[0]
        head.appendChild(loadStyle)
    }

    getValue() {
        return this.getAttribute('value')
    }
}