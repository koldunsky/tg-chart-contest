export default class Minimap {
  constructor(data) {
    this.data = data;
    this.ctx = null;
  }

  renderOneDataSet = (set) => {
    const {ctx, data} = this;
    const setId = set[0];

    if (data.types[setId] === 'line') {
      ctx.strokeStyle = data.colors[setId];
      ctx.beginPath();
      ctx.moveTo(1, set[1]);
      for (let i = 2; i < set.length; i++) {
        ctx.lineTo(i * 3, set[i]);
        console.info(i * 3, set[i], data.colors[setId]);
      }
      ctx.stroke();
    }
  };

  render() {
    const canvas = document.createElement('canvas');
    canvas.width = 500;
    this.ctx = canvas.getContext('2d');
    const {data} = this;
    data.columns.forEach(this.renderOneDataSet);

    return canvas;
  }
}