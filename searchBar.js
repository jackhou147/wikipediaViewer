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
    this.readOnly = false;
  if(!this.classList.contains("app__search-bar-focus")){
    this.classList.add("app__search-bar-focus");
    _app.closeBtn().style.display = "inline-block";
    _app.app().classList.remove("form");
  }
}

_app.searchBar().onkeypress = function(event){
  var keycode = event.keycode || event.which;
  if(keycode == 13){
      this.blur();
    json(this.value,"https://en.wikipedia.org/w/api.php?format=json&callback=displayResult&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=");
    return false;
  }
}

_app.searchBar().addEventListener("blur",function(){ 
    this.readOnly = true;
})

_app.closeBtn().onclick = function(){
    setTimeout(function(){
        _app.searchBar().classList.remove("app__search-bar-focus");
        _app.closeBtn().style.display = "none";
        _app.app().classList.add("form");
        _app.searchBar().value = "";
    },200)
  
}


