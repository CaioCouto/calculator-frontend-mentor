export default class ThemeSelector {
    constructor() {
        this.__activeDivIndex = parseInt(this.__loadTheme());
        this.__elements = document.documentElement.querySelectorAll('*');
        this.__switchBtns = document.querySelectorAll('.main-section-headerSwitchBtn');

        this.__addClass(this.__switchBtns[this.__activeDivIndex].querySelector('div'), 'active');
        this.__elements.forEach(element => this.__addClass(element, `theme${this.__activeDivIndex+1}`));
    }

    __saveTheme() {
        localStorage.setItem('theme', this.__activeDivIndex);
    }
    
    __loadTheme() {
        return localStorage.getItem('theme') || 0;
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
        this.__removeClass(this.__switchBtns[this.__activeDivIndex].querySelector('div'), 'active');
        this.__elements.forEach(element => this.__removeClass(element, `theme${this.__activeDivIndex+1}`));
        this.__setNewIndex();
        this.__addClass(this.__switchBtns[this.__activeDivIndex].querySelector('div'), 'active');
        this.__elements.forEach(element => this.__addClass(element, `theme${this.__activeDivIndex+1}`));
        this.__saveTheme();
    }
}