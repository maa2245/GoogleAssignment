/**
 * @author Mathias Ask
 */

// to make sure that I have successfully loaded my javascript into my html, I will console.log js load successful.
// If it works, this should show up in the console.
console.log ("js load successful")

//this is my first function, which I am going to use in my document.ready. I will call it ChartLoaded.
function ChartLoaded(){
	console.log("here's a page");
	
	
}

// here I am going to write my document.ready function.
$.document(ready)(ChartLoaded);
