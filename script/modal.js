let btns = document.querySelectorAll("*[modal-btn]");

for(let i = 0; i<btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let name = btns[i].getAttribute('modal-btn');
    let modal = document.querySelector("[modal-window='"+name+"']");
    modal.style.display = "block";
    let close = modal.querySelector(".modal-close")
    close.addEventListener('click', function () {
      modal.style.display = "none";
    })
  })
}

window.onclick = function (e) {
  if(e.target.hasAttribute('modal-window')) {
    let modals = document.querySelectorAll("*[modal-window]");
    for( let i = 0; i<modals.length; i++) {
      modals[i].style.display = "none";
    }
  }
}