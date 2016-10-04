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
var multiplierdoer = new Multiplier();
console.log(multiplierdoer.getCurrentValue() );
console.log(multiplierdoer.multiply(2) );
console.log(multiplierdoer.getCurrentValue() );
console.log(multiplierdoer.multiply(4) );
console.log(multiplierdoer.getCurrentValue() );
// 2 methods: getCurrentValue
//				multiply - takes an arugement

// console.log and call back to vars and function


//		Question 2

function Albumphotos(){
	this.photos = [];
	this.addPhoto = function( file, location ) {
		this.photos.push( new Photo(file, location) );
		return this;
		};
	this.listPhotos = function() {
var output = "";
    this.photos.forEach(function(photo){
      output += photo.file + " [" + photo.location + "],";
    });
		return output.slice(0,-1);
  };
  //look for a specific photo
	};
	this.getPhoto = function ( i ) {
			//next to return photo in function below
	}
}

function photo( file, location) {
	this.file = file;
	this.location = location;
	this.toHTML = function() {
		return "<img src=\"" + this.file + "\" />";
	}
}
//var photo1 = new Photo("img/cafespill.jpg","New York");
//var photo2 = new Photo("img/darkpaper.jpg","Michigan");
//var photo3 = new Photo("img/teacolor.jpg","South Doakta");
var myAlbum = new Album();
myAlbum.addPhoto("img/cafespill.jpg","New York").addPhoto("img/darkpaper.jpg","Michigan").addPhoto("img/teacolor.jpg","South Doakta").addPhoto("img/teacolor.jpg","South Doakta")

document.getEventListener("DOMContentLoaded" function()  {
	var elAlbum = document.getElementById("album");
	myAlbum.photos.forEach(function(photo){
		elAlbum.innerHTML += photo.to innerHtml();
	});
	console.log( myAlbum.listPhotos() );
});
// document.addEventListener("DOMContentLoaded", function(){
// 	var elAlbum = document.getElementById("album");
// 	for(var i = 0; i < photos.lenght; i++){
// 		elAlbum.innerHtml += photos[i].toHTML();
// 	}
// });


//		Question 3
function Person( name, gender,  ) {
  this.name = name;
  this.gender = gender;
  // this.place = place;
}


function Student() {
  //this.grade
  console.log( arugments );
  this.grade = arugments[2];
  Person.apply(this, arugments);
}

function Teacher() {
  console.log(arugments);
  this.grade = arugments[2]
  Person.apply(this, arugments);
}
  //variables holding students/teachers
var person1 = new Student( "Alberto","M", "WDI" );
var person2 = new Student( "Arnold","M","WDI" );
var person3 = new Student( "Mike","M","WDI" );
var person4 = new Student( "Izza","F","WDI" );
var person5	= new Student( "Danna","F","WDI" );
var person6 = new Student( "Emma","F","WDI" );
var person7 = new Teacher( "Joseph","M","Full Stack" );
var person8 = new Teacher( "James","M","Full Stack" );
var person9 = new Teacher( "Cam","M","Full Stack" );
console.log( person1, person2, person3, person4, person5, person6, person7, person8, person9);



