const PageState = function () {
    let currentState = new homeState(this);

    this.init = function () {
        this.change(new homeState);
    }

    this.change = function (state) {
        currentState = state;
    }
};

// Home State 
const homeState = function (page) { } 