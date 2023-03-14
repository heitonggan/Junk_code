export class tagName extends HTMLElement {
    constructor() {
        super()
        /**
         * 创建文本框
         */
        let textBox = document.createElement('span')
        textBox.setAttribute('class', 'info')
        // 此时文本框的内容没有被填充,需要保留
        this.textBox = textBox

        /**
         * 创建图标模块
         */
        let img = document.createElement('img')
        img.setAttribute('class', 'img')
        this.img = img

        let icon = document.createElement('span')
        icon.setAttribute('class', 'icon')
        icon.appendChild(img)

        /**
         * 创建css样式
         */
        var loadStyle = document.createElement('link')
        loadStyle.setAttribute('rel','stylesheet')
        loadStyle.setAttribute('href','index.css')
        // 创建根元素，作用其实是将分离的css和html聚合起来
        let shadow = this.attachShadow({ mode: 'open' });
        // 创建一个span标签包裹内容
        let wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');

        // 将创建的style节点追加到影子节点中
        shadow.appendChild(loadStyle);
        // 依次将html按照层级关系添加
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(textBox);
    }

    connectedCallback() {
        // 获取自定义标签的text属性
        var text = this.text()
        this.textBox.textContent = text

        // 创建图片元素
        var imgUrl;
        if (this.hasAttribute('img')) {
            imgUrl = this.imgUrl()
        } else {
            imgUrl = 'https://tvax3.sinaimg.cn/crop.0.0.1008.1008.50/00726IOgly8gdipc86qp0j30s00s075m.jpg?KID=imgbed,tva&Expires=1589255252&ssig=8m%2BzaU%2BjJW';
        }
        this.img.src = imgUrl
    }

    imgUrl() {
        return this.getAttribute('img')
    }

    text() {
        return this.getAttribute('text')
    }
}