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

_buttons.searchBtn().addEventListener("click",function(){
    var search = _app.searchBar().value;
    json(search,"https://en.wikipedia.org/w/api.php?action=query&srlimit=15&list=search&format=json&callback=displayResult&srsearch=");
})

_app.searchBar().addEventListener("click",function(){
    _buttons.visible = true;
    _buttons.toggle();
})

_app.closeBtn().addEventListener("click",function(){
    _buttons.visible = false;
    _buttons.toggle();
    document.body.classList.remove("body");
    document.getElementsByTagName("body")[0].removeChild(document.querySelector(".result-list"));
})

function json(val,url){
    window.displayResult = function(result){
        document.body.classList.add("body");
        var body = document.getElementsByTagName("body")[0];
        var resultList = document.createElement("div");
        resultList.classList.add("result-list");
        if(document.querySelector(".result-list")){
            body.removeChild(document.querySelector(".result-list")); document.body.insertBefore(resultList,document.body.getElementsByTagName("script")[0]);
        };
        document.body.insertBefore(resultList,document.body.getElementsByTagName("script")[0]);
        console.log(result);
        var list = result.query.search;
        list.forEach(function(el){
            var result = document.createElement("div");
            result.classList.add("result-list__result");
            var h3 = document.createElement("h3");
            var h3Text = document.createTextNode(el.title);
            h3.appendChild(h3Text);
            var p = document.createElement("p");
            p.innerHTML = el.snippet;
            result.appendChild(h3);
            result.appendChild(p);
            document.querySelector(".result-list").appendChild(result);
        })
    }
    var $head = document.getElementsByTagName('head')[0];
    var script = document.createElement("script");
    script.src = url+val;
    $head.appendChild(script);
}