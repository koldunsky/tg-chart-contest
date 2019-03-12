import Minimap from './Minimap';
import normalizeData from '../utils/normalizeData';

export default class Chart {
  constructor(el, data) {
    console.log(el, data);
    this.data = normalizeData(data);
    this.columns = null;
    this.el = el;

    this.render();
  }

  render() {
    const Map = new Minimap(this.data);
    this.el.appendChild(Map.render());
  }
}