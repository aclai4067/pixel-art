import './paintbrush.scss';
import $ from 'jquery';
import utilities from '../../helpers/utilities';

const colors = ['rosybrown', 'papayawhip', 'peru', 'lightsalmon', 'dimgrey', 'goldenrod'];

const printColorPicker = () => {
  let colorString = '';
  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    colorString += `
      <div class='form-check form-check-inline'>
      <input name='color' class='form-check-input color-choice' type='radio'  id='${color}inlineCheckbox${[i]}' value='${color}' />
      <label class='form-check-label' for '${color}inlineCheckbox${[i]}'>${color}</label>
      </div>
    `;
  }
  utilities.printToDom('colorPicker', colorString);
};

const paintPixel = (e) => {
  const pixel = $(e.target);
  const colorChoice = $('.color-choice:checked').val();
  pixel.css('backgroundColor', colorChoice);
};

const attachEvents = () => {
  $(document).on('click', 'td', paintPixel);
};

export default { printColorPicker, attachEvents };
