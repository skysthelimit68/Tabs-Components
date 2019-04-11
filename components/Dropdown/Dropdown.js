class Dropdown {
  constructor(element) {
    this.element = element;       // Assign this.element to the dropdown element
    this.button = this.element.querySelector(".dropdown-button");       // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.content = this.element.querySelector(".dropdown-content");       // assign the reference to the ".dropdown-content" class found in the dropdown element 
    this.button.addEventListener('click', () => {       // Add a click handler to the button reference and call the toggleContent method.
      this.toggleContent();
    })
  }

  toggleContent() {    
    this.content.classList.toggle("dropdown-hidden");       // Toggle the ".dropdown-hidden" class off and on
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));