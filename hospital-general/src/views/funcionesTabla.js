function descendingComparator (a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const getAge = (d1) => {
  d1 = new Date(d1.slice(0,10))
  const d2 = new Date();
  const diff = d2.getTime() - d1.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

const funcTable = { 
  getComparator: (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  },
  stableSort: (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  },
  searchTable: (array, search) => {

    const expedienteFilter = array.filter(element => {
      return element.NoExpediente.toString().indexOf(search) !== -1 ||
        element.Nombre.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        element.Apellidos.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        getAge(element.FechaNacimiento).toString().indexOf(search) !== -1;
    });

    return expedienteFilter;
  }
}

export default funcTable;