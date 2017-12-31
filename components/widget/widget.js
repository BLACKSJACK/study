export class Widget {
    constructor({el, data ={}}) {
        this.el=el;
        this.data=data;
    }
    render() {
        this.el=this._getHtml();
    }
    setData(data) {
        Object.assign(this.data, data);
    }
    _getHtml() {
        throw new Error('Метод _getHtml должен быть переопределен!');
    }
}
