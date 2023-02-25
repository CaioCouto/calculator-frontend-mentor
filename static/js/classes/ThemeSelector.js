export default class ThemeSelector {
    constructor() {
        this.__activeDivIndex = 0;
        this.__bodyElement = document.querySelector('body');
        this.__allBodyChildren = document.querySelectorAll('body *');
        this.__switchBtns = document.querySelectorAll('.main-section-headerSwitchBtn');
        this.__addClass(this.__switchBtns[this.__activeDivIndex].querySelector('div'), 'active');
    }

    __setNewIndex() {
        this.__activeDivIndex++;
        const overflow = this.__activeDivIndex > this.__switchBtns.length-1; 
        if (overflow) this.__activeDivIndex = 0;
    }

    __removeClass(element, className) {
        element.classList.remove(className);
    }  
    
    __addClass(element, className) {
        element.classList.add(className);
    }

    changeTheme() {
        this.__removeClass(this.__bodyElement, `theme${this.__activeDivIndex+1}`);
        this.__removeClass(this.__switchBtns[this.__activeDivIndex].querySelector('div'), 'active');
        this.__allBodyChildren.forEach(element => this.__removeClass(element, `theme${this.__activeDivIndex+1}`));
        this.__setNewIndex();
        this.__addClass(this.__bodyElement, `theme${this.__activeDivIndex+1}`);
        this.__addClass(this.__switchBtns[this.__activeDivIndex].querySelector('div'), 'active');
        this.__allBodyChildren.forEach(element => this.__addClass(element, `theme${this.__activeDivIndex+1}`));
    }
}