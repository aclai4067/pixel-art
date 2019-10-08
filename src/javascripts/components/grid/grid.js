import './grid.scss';
import utilities from '../../helpers/utilities';

const makeGrid = () => {
  let gridString = '<table>';
  for (let i = 0; i < 25; i += 1) {
    gridString += '<tr>';
    for (let n = 0; n < 25; n += 1) {
      gridString += '<td></td>';
    }
    gridString += '</tr>';
  }
  gridString += '</table>';
  utilities.printToDom('grid', gridString);
};

export default { makeGrid };
