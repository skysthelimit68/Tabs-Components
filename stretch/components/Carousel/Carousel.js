class Carousel {
    constructor(elements, active){
        this.elements = elements;

        this.active = active;

        this.items = Array.from(this.elements).map(elem => new Item(elem, this));

        this.total = this.items.length;
    }
    
}

class Item {
    constructor(element, carousel) {
        this.element = element;
        
        this.carousel = carousel;
        
        this.data = element.dataset.tab;

        
    }

    next() {
        
    }

    previous() {

    }
}

let images = document.querySelectorAll('.img-box');
let active = document.querySelector(".img-box active");
images = new Carousel (images, active);
