const body = document.querySelector('body');
const generateBtn = document.querySelector('#generate');
const copyBtn = document.querySelector('#copy');
const hex1 = document.querySelector('#hex1');
const hex2 = document.querySelector('#hex2');
const hexes = ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6'];
const hexesLength = hexes.length;
let hex1Value = '';
let hex2Value = '';

const getRandomHex = (num) => {
  return hexes[Math.floor(Math.random() * num)];
};

const setCopyBtnContent = (text) => {
  if (copyBtn.textContent === text) return;

  copyBtn.textContent = text;
}

const generateHex = () => {
  hex1Value = '';
  hex2Value = '';
  setCopyBtnContent('Copy');

  for (let i = 1; i <= 6; i++) {
    hex1Value += getRandomHex(hexesLength);
    hex2Value += getRandomHex(hexesLength);
  }

  hex1.innerHTML = hex1Value;
  hex2.innerHTML = hex2Value;
  body.style.backgroundImage = `linear-gradient(45deg, #${hex1Value}, #${hex2Value})`;
};

const copyHex = () => {
  navigator.clipboard.writeText(body.style.backgroundImage);
  setCopyBtnContent('Copied');
}

generateBtn.addEventListener('click', generateHex);
copyBtn.addEventListener('click', copyHex)
