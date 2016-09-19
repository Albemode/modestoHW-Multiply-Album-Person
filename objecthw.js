//create a construter for Multipliear
// constructor will set currentValue to 1

function Multiplier() {
  this.currentValue = 1;
  this.getCurrentValue = function() {
    return this.currentValue;
  }
  this.multiply = function(num) {
  	this.currentValue = this.currentValue * num;
  	//return this.currentValue;
  	return this.getCurrentValue();
  }
}
var doer = new Multiplier();
console.log(doer.getCurrentValue() );
console.log(doer.multiply(2) );
console.log(doer.getCurrentValue() );
console.log(doer.multiply(4) );
console.log(doer.getCurrentValue() );
// 2 methods: getCurrentValue
//				multiply - takes an arugement

// well practice using the object


// we want to first define what a photo is...
//our model...
// has a <file location, location where taken>


//		Question 2

function Album(){
	this.photos = [];
	this.addPhoto = function( file, location ) {
	this.photos.push( new Photo(file, location) );
	};
	this.listPhotos = function() {

	};
	this.getPhoto = function ( i ) {

	}
}



function photo( file, location) {
	this.file = file;
	this.location = location;
	this.toHTML = function() {
		return"img src\"" + this.file + "\" />";
	}
}

//var photo1 = new Photo("img/cafespill.jpg","New York");
//var photo2 = new Photo("img/darkpaper.jpg","Michigan");
//var photo3 = new Photo("img/teacolor.jpg","South Doakta");



var myAlbum = new Album();
myAlbum.addPhoto("img/cafespill.jpg","New York")
myAlbum.addPhoto("img/darkpaper.jpg","Michigan")
myAlbum.addPhoto("img/teacolor.jpg","South Doakta")
document.getEventListener("DOMContentLoaded" function()  {
	var elAlbum = document.getElementById("album");
	myAlbum.photos.forEach(function(photo){
		elAlbum.innerHTML += photo.to innerHtml();
	});
	console.log( myAlbum.listPhotos() );
});





document.addEventListener("DOMContentLoaded", function(){
	var elAlbum = document.getElementById("album");
	for(var i = 0; i < photos.lenght; i++){
		elAlbum.innerHtml += photos[i].toHTML();
	}
});

//		Question 3

function Person( name, gender ) {
  this.name = name;
  this.gender = gender;
}


function Student() {
  //this.grade
  console.log( arugments );
  this.grade = arugments[2];
  Person.apply(this, arugments);
}

function Teacher() {
  console.log(arugments);
  this.grade = arugments[3]
  Person.apply(this, arugments);
}

var person1 = new Student( "Alberto","M", "WDI" );
var person2 = new Student( "Arnold","M","WDI" );
var person3 = new Student( "Muhamadi","M","WDI" );
var person4 = new Student( "Izza","F","WDI" );
var person5	= new Student( "Danna","F","WDI" );
var person6 = new Student( "Emma","F","WDI" );
var person7 = new Teacher( "Joseph","M","Full Stack" );
var person8 = new Teacher( "Samuel","M","Full Stack" );
var person9 = new Teacher( "Cam","M","Full Stack" );
console.log( person1, person2, person3, person4, person5, person6, person7, person8, person9);



