let nav = document.querySelector('.tmplt');

let Pageid = new URLSearchParams(window.location.search).get('id');
let Home = document.querySelector('.home');
let Gallery = document.querySelector('.gallery');
let Us = document.querySelector('.us');
Pageid = Number(Pageid);
async function changecolor(Pageid) {
    if (Home && Gallery && Us) {
        if (Pageid === 1) {

            Home.style.color = 'Green';

            console.log("Biku")
        }
        else if (Pageid == 2) {
        
                Gallery.style.color = "Green";
           
            console.log("Biku4")


        } else {
         
                Us.style.color = "Green";
          
        }
    }

}
async function Template() {
    let x = await fetch("/Template.html");
    let server = await x.text();
    let result= await changecolor(Pageid);
   
    nav.innerHTML = server;
    console.log(result);
    console.log("hello")

}
Template();
let list = document.querySelector('.list');
let items = document.querySelectorAll('.item');
let dots = document.querySelectorAll(' li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let active = 0;

let lengthItems = items.length - 1;
next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();

}
prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(() => { next.click() }, 3000);

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.active')
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {
        next.click()
    }, 3000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlider();
    })
})
function createConfettiPiece() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = getRandomColor();
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }

  function getRandomColor() {
    const colors = ['#FF6347', '#FFD700', '#ADFF2F', '#87CEEB', '#EE82EE', '#FFA07A'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function startConfetti() {
    for (let i = 0; i < 100; i++) {
      setTimeout(createConfettiPiece, i * 50);
    }
  }

