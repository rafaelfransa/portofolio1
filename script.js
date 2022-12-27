const pSidebar = document.querySelector('.sidebar p');
const container = document.querySelector('.container');
const mobileMenu = document.querySelector('.mobile-menu');
const sidebar = document.querySelector('.sidebar');
pSidebar.addEventListener('click', function(e){
    sidebar.classList.add('sidebar-none');
    
});
const body = document.querySelector('body');
container.addEventListener('click', function(e){
    sidebar.classList.remove('sidebar-none')
})



const txtElement = ['Freelancer', 'Web Developer', 'Graphic Designer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';
const sliceWord = document.querySelector('.efect-words');
(function word(){
    if(count == txtElement.length){
        count = 0;
    } currentTxt = txtElement[count];
    words = currentTxt.slice(0, ++txtIndex);
    sliceWord.textContent = words

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(word, 500);
})();


// const h4 = document.querySelectorAll('h4');
// for ( let i = 0; i < h4.length; i++) {
//     h4[i].addEventListener('click', function(){
//         const bar = document.querySelectorAll('.bar');
//         for ( let iBar = 0; iBar < bar.length; iBar++) {
//             bar[iBar].style.display = 'block'
//             bar[iBar].classList.add('transition-bar');
//         }
        
//     });
// };

// const porto = document.querySelectorAll('.porto');
// for ( let i = 0; i < porto.length; i++) {
//     porto[i].addEventListener('mouseenter', function(e){
//         porto[i].style.width = '22%';
//     });
// };













