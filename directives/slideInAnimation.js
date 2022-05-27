const slideInScrollObserver = new IntersectionObserver(
    (entries, slideInScrollObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('slide');
                console.log("intersected");
                slideInScrollObserver.unobserve(entry.target);
            }else {
                entry.target.classList.remove('slide');
            }
        });
    }
);

//export default
export default {
bind(el) {
    el.classList.add('before-slide');
    slideInScrollObserver.observe(el);
}
}