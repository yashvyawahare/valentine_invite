let sum = 0;
function yes() {
  let img = document.querySelector('img')
  const new_img = "https://media1.tenor.com/m/cd9zqSTIIdUAAAAC/you-brown-bear-me-white-bear-i-loveeee-you.gif";
  img.setAttribute('src', new_img );
  img.style.height='270px';
  img.style.width='300px';
  let body1 = document.querySelector('body')
  body1.style.backgroundColor="#f9f6f3";
  let yes_button = document.querySelector('.yes');
  let no_button = document.querySelector('.no');
  let que_text = document.querySelector('h3');
  yes_button.remove();
  no_button.remove();
  que_text.remove();
  let pTag = document.createElement('p');
  pTag.textContent = "Ok yay!!!"
  document.querySelector(".button").appendChild(pTag);
}
function no() {
  let increaseButton = document.querySelector(".no");
  let targetButton = document.querySelector(".yes");

// Add event listener to increaseButton
increaseButton.addEventListener('click', function() {
    // Get the current width and height of the target button
    var currentWidth = parseInt(window.getComputedStyle(targetButton).width);
    var currentHeight = parseInt(window.getComputedStyle(targetButton).height);
    
    // Increase the width and height by 5 pixels
    var newWidth = currentWidth + 5 + 'px';
    var newHeight = currentHeight + 5 + 'px';
    
    // Set the new width and height to the target button
    targetButton.style.width = newWidth;
    targetButton.style.height = newHeight;
});
  let yes = document.querySelector(".yes");
  increaseButton.textContent = text();
  let img = document.querySelector('img')
  const new_img = "https://media.tenor.com/QOzMqPvW8PUAAAAi/love-you.gif";
  img.setAttribute('src', new_img );
  img.style.height='270px';
  img.style.width='270px';
  sum = sum + 1;
  yes.style.color = "red";
}

const lines = [
  "Are you sure?", "Really sure??", "Think again", "Last chance!!"];

const line2 = ["Surely not!","You may regret this","give it another thought"];
function text() {
    if(sum < lines.length) {
      return lines[sum];
    }else{
      return line2[Math.floor(Math.random() * 3)];
    }
}
