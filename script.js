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
    json(search,/*"https://en.wikipedia.org/w/api.php?action=query&srlimit=15&list=search&format=json&callback=displayResult&srsearch="*/"https://en.wikipedia.org/w/api.php?format=json&callback=displayResult&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=");
})

_app.searchBar().addEventListener("click",function(){
    _buttons.visible = true;
    _buttons.toggle();
})

_app.closeBtn().addEventListener("click",function(){
    _buttons.visible = false;
    if(document.querySelector(".result-list")){
        document.querySelector(".result-list").classList.add("result-list-fade-out");
    }
    setTimeout(function(){
        document.body.classList.remove("body");
        if(document.querySelector(".result-list")){
            document.getElementsByTagName("body")[0].removeChild(document.querySelector(".result-list"));
        }
        _buttons.toggle();
    },200);
})
/*

document.querySelector(".result-list__result").onmouseover = function(){
    this.classList.add("result-list__result-hover");
}

document.querySelector(".result-list__result").onmouseout = function(){
    this.classList.remove("result-list__result-hover");
}
*/

function json(val,url){
    window.displayResult = function(result){
        document.body.classList.add("body");
        var body = document.getElementsByTagName("body")[0];
        var resultList = document.createElement("div");
        resultList.classList.add("result-list");
        resultList.classList.add("result-list-fade-in");
        if(document.querySelector(".result-list")){
            body.removeChild(document.querySelector(".result-list")); document.body.insertBefore(resultList,document.body.getElementsByTagName("script")[0]);
        };
        console.log(result);
        var list = result.query.pages;
        for(var key in list) {
            console.log(list[key]);
            var result = document.createElement("div"); //create div element
            result.classList.add("result-list__result");
            var h3 = document.createElement("h3");      //create h3 element
            var h3Text = document.createTextNode(list[key].title);
            h3.appendChild(h3Text);
            var p = document.createElement("p");        //create p element
            p.innerHTML = list[key].extract;
            var a = document.createElement("a");
            a.href = "https://en.wikipedia.org/?curid="+list[key].pageid;
            a.setAttribute("target","_blank");
            result.appendChild(h3);
            result.appendChild(p);
            result.appendChild(a);
            resultList.appendChild(result);
        } document.body.insertBefore(resultList,document.body.getElementsByTagName("script")[0]);
    }
    var $head = document.getElementsByTagName('head')[0];
    var script = document.createElement("script");
    script.src = url+val;
    $head.appendChild(script);
};

