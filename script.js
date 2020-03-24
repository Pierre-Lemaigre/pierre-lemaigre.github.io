// Following comments are used for eslint
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */

// Js part
function greet() {
  window.alert('Hello Everybody!');
}

function init() {
  // Modifying src of image.
  document.getElementById('first').src = 'icons/car1.png';
  const images = document.getElementById('container').getElementsByTagName('img');
  images[1].src = 'icons/flower2.png';
  images[3].src = 'icons/flower2.png';

  // Adding html to html code by using js.
  const inerJs = document.getElementById('inerJs');
  inerJs.innerHTML = '<div><p>You are great!</p></div>';
  // Create element with js then injecting in documents
  const image = document.createElement('img');
  image.src = 'icons/flower2.png';
  const missingSpan = document.getElementById('new_element');
  missingSpan.appendChild(image);

  // Raimbow part
  const spans = document.getElementById('rainbow').getElementsByTagName('span');
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
  for (let i = spans.length - 1; i > -1; i -= 1) {
    spans[i].style.color = colors[i];
  }
}
