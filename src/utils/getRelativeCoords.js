const getMin = (arr) => Math.min.apply(null, arr);
const  getMax = (arr) => Math.max.apply(null, arr);

export default (charts = [[], []], containerMin = 0, containerMax=300) => {
  const maxes = charts.map((c) => getMax(c.values));
  const max = getMax(maxes);
  const min = 0;
  const o = {};
  debugger;


  charts.forEach((chart) => {
    o[chart.id] = chart.values.map((val) => containerMax - ((val / max) * containerMax));
  });

  console.info(o);

  return o;
}