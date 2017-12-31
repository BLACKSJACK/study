import {Widget} from './../widget/widget.js';

export class Form extends Widget {
    constructor(obj) {
        super(obj);
        console.log(obj.onSubmit);
        this.onSubmit=obj.onSubmit;
        this.el.addEventListener('submit', this._onSubmit.bind(this));
    };
    _getHtml() {
        this.el.innerHTML=`
        <form>
            <textarea></textarea>
            <input type="submit" value="Send">
        </form>
        `;
        return this.el;
    };
    _onSubmit(event) {
        event.preventDefault();
        this.onSubmit({
            author: 'me',
            text: event.target.querySelector('textarea').value
        });
        event.target.querySelector('textarea').value='';
    }
}
