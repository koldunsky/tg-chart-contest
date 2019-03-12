export const normalizeColumns = (columns) =>
  columns.map((values) => ({
    id: values.shift(),
    values
  }));

export default (data) => {
  const z = {
    charts: [],
    axisX: null
  };

  const columns = normalizeColumns(data.columns);

  columns.forEach((dataSet) => {
    data.types[dataSet.id] === 'x' ? z.axisX = dataSet : z.charts.push(dataSet);
  });


  z.charts = z.charts.map(({id, values}) => ({
    id: id,
    values: values,
    color: data.colors[id],
    name: data.names[id],
    type: data.types[id]
  }));

  console.info(z);
  return z;
};