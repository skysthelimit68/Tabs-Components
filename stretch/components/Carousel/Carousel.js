class Carousel {
    constructor(elements, active){
        this.elements = elements;
        this.active = active;
        this.images = Array.from(this.elements).map(elem => new Carousel(elem, this));
        this.total = this.images.length;
    }
    
}

class Image {
    constructor(element) {
        this.element = element;
        this.data = element.dataset.tab;

    }

    next() {

    }
}

let images = document.querySelectorAll('.img-box');
let active = document.querySelector(".img-box active");
images = new CarouselMain (images, active);
