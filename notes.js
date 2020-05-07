 function calcArea (radius) {
	var area = 3.14 * radius**2;
	return area;
	}
	
	const a = calcArea(5);
	alert(a );








//Ryan ?? - var vs let, let is "block scoped"? I get var is function scoped and lives within that function, but "let"? 


/*const speak = function(name = 'Turkey', time = 'night') {
	console.log('good ' + time + ', ' + name);
	};
	
	speak(); 
	speak("Kate", "day"); 
	speak(, "day"); 
*/







/*
//Ryan ?? - which do you prefer, function declarations or function expressions? This dude likes expressions to reduce mistakes. 
greet();
greet();
//speak();  - cannot have this F.Expression listed above where the expression is defined. No hoisting. 
//Example of function declaration: 
function greet () {
	console.log("Hello There, Lobster!");
	}
	
	greet();
	
 //Example of function expression: 
 const speak = function() {   //function expression...
	console.log("good day");
	}; //use the semi-colon here because it's a function expression. No semi-colons on standard functions. 
	
	speak();
	
	
/*hoisting - hoisted to the top of the file that runs before the rest of the JS. Only with functions, not F.Expressions.  */


