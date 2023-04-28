document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open')
    }
}

// ----------------------------------------------------------------------

const animItems = document.querySelectorAll('._anim-items');
console.log('lena')
if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    console.log('lena');
     function animOnScroll() {
        for (let index = 0; index < animItems.length; index++)  {
            const animItem = animItems[index]; 
            const animItemHeigth = animItem.offsetHeight;  
            console.log(animItemHeigth);
            console.log('lena1');
            const animItemOffset = offset(animItem).top;
            console.log(animItemOffset,'aninItemOffset');
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeigth / animStart;
            if (animItemHeigth > window.innerWidth) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            
            if (window.pageYOffset > (animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeigth)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active');
                }                
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }
      setTimeout(() => {
        animOnScroll();
      }, 300);
      
} 