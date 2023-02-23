var mytxt1 = document.getElementById("mytxt1");
var mytxt2 = document.getElementById("mytxt2");
var myselect = document.getElementById("myselect");
var ul = document.getElementById("ul");
var len;
var result;
var calc;

var funcCalc = function(){
    if(myselect.value=="1"){
        result = Number(mytxt1.value) + Number(mytxt2.value);
        calc = "+";
    }else{
        result = Number(mytxt1.value) - Number(mytxt2.value);
        calc = "-";
    };
    const li = document.createElement("li");
    li.innerText = mytxt1.value + calc + mytxt2.value + "=" + result;
    ul.appendChild(li);
    alert(result);
}

var funcClear = function(){

    // 子要素の数を取得
    len = ul.children.length;
    // 子要素を削除
    for(var i=0; i<len; i++){
        ul.removeChild(ul.children[0]);
    }

}

