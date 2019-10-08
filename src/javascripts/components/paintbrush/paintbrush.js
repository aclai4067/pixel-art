import './paintbrush.scss';
import utilities from '../../helpers/utilities';

const colors = ['green', 'darkorchid', 'papayawhip', 'blanchedalmond', 'tomato', 'cornsilk'];

const printColorPicker = () => {
  let colorString = '';
  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    colorString += `
      <div class='form-check form-check-inline'>
      <input name='color' class='form-check-input color-choice' type='radio'  id='${color}inlineCheckbox1' value='${color}' />
      <label class='form-check-label' for '${color}inlineCheckbox1'>${color}</label>
      </div>
    `;
  }
  utilities.printToDom('colorPicker', colorString);
};

export default { printColorPicker };
