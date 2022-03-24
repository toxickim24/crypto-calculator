const rangeLabel = document.querySelector('.custom-range-slider');
const rangeInput = rangeLabel.children[0];
const thumbWidth = 20;
const slider = document.getElementById('range');

rangeLabel.insertAdjacentHTML(
  'beforeend', 
  `<span class="bubble">${rangeInput.value}</span>`
);

const rangeBubble = rangeLabel.children[1];

positionBubble(rangeBubble, rangeInput)

function positionBubble(bubbleElement, anchorElement) {

  const {min, max, value, offsetWidth} = anchorElement;
  const total = Number(max) - Number(min);
  const perc = (Number(value) - Number(min)) / total;
  const offset = (thumbWidth/10) - (thumbWidth * perc);
 
  bubbleElement.style.left = `calc(${perc * 100}% + ${offset}px)`;
  bubbleElement.textContent = value;

  var valuePerc = perc * 100;
  var color = 'linear-gradient(90deg, #f12c73 '+valuePerc+'%, #282828 '+valuePerc+'%)';
  slider.style.background = color;
  
}

rangeInput.addEventListener('input', (e) => positionBubble(rangeBubble, e.target))


