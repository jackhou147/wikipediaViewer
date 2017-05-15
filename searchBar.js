var _app = {
  app: function(){
    return document.querySelector(".app")
  },
  searchBar: function(){
    return document.querySelector(".app__search-bar")
  },
  closeBtn: function(){
    return document.querySelector(".app__close-btn")
  }
}

_app.searchBar().onclick = function(){
  if(!this.classList.contains("app__search-bar-focus")){
    this.classList.add("app__search-bar-focus");
    this.readOnly = false;
    _app.closeBtn().style.display = "inline-block";
    _app.app().classList.remove("form");
  }
}

_app.searchBar().onkeypress = function(){
  var keycode = event.keycode || event.which;
  if(keycode == 13){
    alert(this.value);
    return false;
  }
}

_app.closeBtn().onclick = function(){
  _app.searchBar().classList.remove("app__search-bar-focus");
  _app.searchBar().readOnly = true;
  _app.closeBtn().style.display = "none";
  _app.app().classList.add("form");
  _app.searchBar().value = "";
}

