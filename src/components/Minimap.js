import getRelativeCoords from "../utils/getRelativeCoords";

export default class Minimap {
  constructor(data) {
    console.info(data);
    this.data = data;
    this.relativeCoords = null;
    this.svg = null;
  }

  getPath(coords = []) {
    let d = '';
    d += `M 0 ${coords[0]}`;
    for(let i = 1; i < coords.length; i++) {
      const step = 10;
      d +=  `L ${step * i} ${coords[i]} `;
    }

    return d;
  }

  renderOneDataSet = ({id, color}) => {
    const {svg} = this;
      const svgNS = svg.namespaceURI;

      const path = document.createElementNS(svgNS, 'path');
      path.setAttribute('d', this.getPath(getRelativeCoords(this.data.charts)[id]));
      path.setAttribute('stroke', color);
      path.setAttribute('fill', 'transparent');
      this.svg.appendChild(path);
  };

  render() {
    const {data} = this;
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.svg.setAttribute('width', 1100);
    this.svg.setAttribute('height', 300);
    data.charts.forEach(this.renderOneDataSet);
    return this.svg;
  }
}