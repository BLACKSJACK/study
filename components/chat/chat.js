import {Widget} from './../widget/widget.js';

export class Chat extends Widget {
    constructor(obj) {
        super(obj);
    };
    _getHtml() {
        const messagesHTML=this.data.messages.map(({author, text})=>{
            return `
            <div class='chat__message'>
                <h4>${author}</h4>
                <span>${text}</span>
            </div>
            `;
        }).join('');
        this.el.innerHTML=`
            <div class='chat'>
                ${messagesHTML}
            </div>
        `;
        return this.el;
    };
}
