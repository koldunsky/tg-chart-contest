import Minimap from './Minimap';

export default class Chart {
  constructor(el, data) {
    console.log(el, data);
    this.data = data;
    this.el = el;

    this.render();
  }

  render() {
    const Map = new Minimap(this.data);
    this.el.appendChild(Map.render());
  }
}