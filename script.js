const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');

    accordian.addEventListener('click', () => {
        
        if(icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
        
    })
})

// Create a preloader div
const preloader = document.createElement('div');
preloader.classList.add('preloader');

// Add the preloader to the body
document.body.appendChild(preloader);

// Add a loader image to the preloader
const loaderImage = document.createElement('img');
loaderImage.src = 'Netflix.gif';
// Add a function to remove the preloader when the page is loaded
window.addEventListener('load', function() {
  preloader.classList.remove('preloader');
});