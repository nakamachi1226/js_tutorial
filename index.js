var mytxt1 = document.getElementById("mytxt1");
var mytxt2 = document.getElementById("mytxt2");
var myselect = document.getElementById("myselect");
var mycalc;

var myfunc = function(){
    if(myselect.value=="1"){
        mycalc = Number(mytxt1.value) + Number(mytxt2.value);
    }else{
        mycalc = Number(mytxt1.value) - Number(mytxt2.value);
    };
    alert(mycalc);
}

