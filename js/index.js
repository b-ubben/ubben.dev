function addToContainer(elem) {
  const container = document.querySelector('.container--logos');
  container.appendChild(elem);
}

function createImageDiv() {
  const newDiv = document.createElement('div');
  const newImg = new Image();
  const randAnimationDuration = Math.round(Math.random() * 7) + 7;

  newDiv.classList.add('scrolling-logo');
  newImg.style.animation = `travel ${randAnimationDuration}s linear infinite alternate`;

  newImg.src = 'https://images.ubben.co/logo.svg';
  newImg.alt = 'UBBEN';

  newDiv.appendChild(newImg);
  addToContainer(newDiv);
}

function renderImgDivs() {
  let i = 0;

  while (i <= 16) {
    createImageDiv();
    i++;
  }
}

renderImgDivs();
