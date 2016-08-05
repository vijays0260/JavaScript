window.onload=function(){
  //var mbutton=document.getElementById('clickme');
  //mbutton.onclick=example;

  document.getElementById('clickme').onclick=example;
}
/*
function example(){
alert('Hello World!!!');
}
*/
function example(){
  /*
  var element=document.getElementById('second');
  var name=element.nodeName;
  //alert(name);
  if(element!=null)
  {
    alert(element.innerHTML);
  }

  document.getElementById('second').innerHTML="this is changed";
    */
    /*
    var list=document.getElementsByTagName('div');
    //alert(list.length);
    var second=list[0];
    alert(second.innerHTML);

    var element=document.getElementById('second');
    alert(element.parentNode.nodeName);
    */

    var link=document.getElementById('google');
    var mylink=link.href;
    alert(mylink);
}
