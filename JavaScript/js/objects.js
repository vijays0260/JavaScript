var sometext={
  status:"ready",
  value:function() {
    document.write("Welcome to Cts")
  }
}
/*if(sometext.status==="ready")
{
 sometext.value();
}

var utilities={
  printAllMembers:function(targetObject){
  for(i in targetObject){
    document.write("<br />"+targetObject[i]);
  }
}
}
 //utilities.printAllMembers(sometext);

/*var i_am_empty={};
utilities.printAllMembers(i_am_empty);
*/
var value={
  id:5,
  name:"Vijay",
  faction:{
    id:7,
    name:"tdmn",
    notification:function(){
      document.write("Hello!");
    }
  },
  cities:[
    {locationid:15, name:"chennai"},
    {locationid:16, name:"pdkt"},
    {
      locationid:17, name:"trichy"
    }
  ]
};

//value.faction.notification();
//document.write(value.cities[0].name);
/*
document.write(value.cities[0].name);
value.cities[0].name="Madurai";
document.write("<br />"+value.cities[0].name);
*/
/*
var x=value;
document.write(x.name);
*/
/*
for(member in value)
{
  document.write("<br />"+member+"==>"+value[member]);
}
*/
function car(make,model,year) {
  this.make=make;
  this.model=model;
  this.year=year;
}

var mycar=new car("Eagle","Aadi",1995);
var othercar=new car("Dodge","Dart",1994);

alert(mycar.model);
alert(othercar.year);
