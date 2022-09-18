const body = document.querySelector("body"),
  modeSwitch = body.querySelector(".toggle");

  modeSwitch.addEventListener('click',()=>{
      body.classList.toggle('dark')
  })