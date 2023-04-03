
const animItems = document.querySelectorAll('._anim-items');

if (animItems.lengtn > 0){
    window.addEventListener('scroll', animOnScroll);
     function animOnScroll(params) {
        for (let index = 0; index < animItems.lengtn; index++) {
            const animItem = animItems[index];           
            const animItemHeigth = animItem.offsetHeight;  // высота об
            const animItemOffset =  offset(animItem).top; // Позиция объекта относительно верха
            const animStart = 4;  // Момент старта анимации
        //    Настройка момента старта анимации
            let animItemPoint = window.innerHeight - animItemHeigth / animStart;
  
            // window.innerHeight - высота браузера
            // Eсли анимированный объект выше высоты браузера
            // Перестраиваем момент старта 
            if (animItemHeigth > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
                // Определяю момент когда добавлять класс
            }
            // pageYOffset - данные о количестве проскролленных пикселях
            if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeigth)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            }
            }
     }
     function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}