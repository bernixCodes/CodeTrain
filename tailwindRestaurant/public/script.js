const menuList = document.querySelector('#menu');
const bars = document.querySelector('#bars')
const closeMenu = document.querySelector('#closeMenu')

bars.addEventListener('click', ()=>{
    menuList.style.display = 'block'
    bars.style.display = 'none'
    closeMenu.style.display = 'block'
})

closeMenu.addEventListener('click', ()=>{
    menuList.style.display = 'none'
    bars.style.display = 'block'
    closeMenu.style.display = 'none'
})