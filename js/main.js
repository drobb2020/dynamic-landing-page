// DOM Elements
const time = document.getElementById('time'),
  date = document.getElementById('date'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
  
    // set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr format
    hour = hour % 12 || 12;

    // Output Time
    // time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;
    time.innerHTML = `${hour}<span>:</span>${addZero(min)} ${
      showAmPm ? amPm : ""
    }`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : "") + n;
}

// Set Background and greeting
function setBgGreeting() {
  let today = new Date(),
    hour = today.getHours();

  if(hour <12) {
    // Morning
    document.body.style.backgroundImage = "url('../images/morning.jpg')";
    document.body.style.backgroundSize = "cover";
    greeting.textContent = 'GOOD MORNING';
  } else if(hour < 18){
    //afternoon
    document.body.style.backgroundImage = "url('../images/afternoon.jpg')";
    document.body.style.backgroundSize = "cover";
    greeting.textContent = "GOOD AFTERNOON";
  } else {
    //evening
    document.body.style.backgroundImage = "url('../images/evening.jpg')";
    document.body.style.backgroundSize = "cover";
    greeting.textContent = "GOOD EVENING";
    document.body.style.color = 'white';
  }
}

// Get name
function getName() {
  if(localStorage.getItem('name') === null) {
    name.textContent = '[Enter your Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set name
function setName(e) {
  if(e.type === 'keypress') {
    // Make sure enter is pressed
    if(e.which === 13 || e.keycode === 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}
// Get focus
function getFocus() {
  if(localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter your focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set focus
function setFocus(e) {
  if(e.type === 'keypress') {
    // Make sure enter is pressed
    if(e.which === 13 || e.keycode === 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// run
showTime();
setBgGreeting();
getName();
getFocus();
