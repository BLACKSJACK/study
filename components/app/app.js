import {Chat} from './../chat/chat.js';
import {Form} from './../form/form.js';

const messages=[
    {
        author: 'Artsiom Mezin',
        text: 'Обычный маковский терминал'
    },
    {
        author: 'Назар',
        text: 'Ребята, всех с наступающими праздниками! Счастья, добра, любви, бабла!'
    },
    {
        author: 'Artsiom Mezin',
        text: 'Обычный маковский терминал'
    }
];

export class App {
    constructor( {el}, ...rest ) {
        console.log(rest);
        this.el=el;
        this.chat=new Chat({
            el: document.createElement('div'),
            data: {messages}
        });
        this.form=new Form({
            el: document.createElement('div'),
            onSumbit: this._onFormSubmit.bind(this)
        });
        this.el.append(this.chat.el, this.form.el);
        this.render();
    }
    _onFormSubmit(letter) {
        this.chat.setData(
            {
                messages: [...this.chat.messages, letter]
            }
        );
        this.chat.render();
    }
    render() {
        this.chat.render();
        this.form.render();
    };
}
