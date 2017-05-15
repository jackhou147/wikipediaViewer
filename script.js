var _buttons = {
    buttonBar: function(){
        return document.querySelector(".buttons")
    },
    searchBtn: function(){
        return document.querySelector(".buttons__search")
    },
    randomBtn: function(){
        return document.querySelector(".buttons__random")
    },
    visible: false,
    toggle: function(){
        if(!this.visible){
            this.buttonBar().style.visibility = "hidden";
        }else {
            this.buttonBar().style.visibility = "visible";
        }
    }
}

_app.searchBar().addEventListener("click",function(){
    _buttons.visible = true;
    _buttons.toggle();
})

_app.closeBtn().addEventListener("click",function(){
    _buttons.visible = false;
    _buttons.toggle();
})