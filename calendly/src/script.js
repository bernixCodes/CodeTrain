const navModal = document.querySelector('#navModal');
const shouldShow = document.querySelector('#showModal');
const showResourceModal = document.querySelector('#showResourceModal');

shouldShow.addEventListener('mouseover', () =>{
    navModal.show();
});

shouldShow.addEventListener('mouseout', () =>{
    navModal.close();
});

showResourceModal.addEventListener('mouseover', () =>{
    navModal.show();
});

showResourceModal.addEventListener('mouseout', () =>{
    navModal.close();
});
