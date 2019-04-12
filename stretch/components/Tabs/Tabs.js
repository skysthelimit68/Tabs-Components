
class Tabs {
  constructor(elements, selectedTab, selectedItem) {
    
    this.elements = elements;
    
    this.tabLinks = Array.from(this.elements).map(elem => new TabLink(elem, this));
    
    this.selectedTab = selectedTab;
    
    this.selectedItem = selectedItem;
  }
}

class TabLink {
  constructor(element, tabs) {
    
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    //reference to Tabs instance
    this.tabs = tabs;
    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement, this.tabs);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => {
      this.select();
      this.deselect(this.tabs.selectedTab);
      this.tabs.selectedTab = this.element; 
    })
  }

  select() {
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected");
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }

  deselect(selectedTab) {
    if(selectedTab != this.element) {
      selectedTab.classList.remove("tabs-link-selected");
      this.tabItem.deselect(this.tabs.selectedItem);
    } 
  }
}

class TabItem {
  constructor(element, tabs) {
    // Assign this.element to the passed in element
    this.element = element;
    //reference to Tabs instance
    this.tabs = tabs;
  }

  select() {
    // Add a class named "tabs-item-selected" to this element
        this.element.classList.add("tabs-item-selected");     
  }

  deselect(selectedItem) {
    selectedItem.classList.remove("tabs-item-selected");
    this.tabs.selectedItem = this.element; 
  }
}

/* START HERE: 
- Select all classes named ".tabs-link" and assign that value to the links variable
- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter
*/

let links = document.querySelectorAll(".tabs-link");
let selectedTab = document.querySelector(".tabs-link-selected");
let selectedItem = document.querySelector(".tabs-item-selected");
links = new Tabs(links, selectedTab, selectedItem);
