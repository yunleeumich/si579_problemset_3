/*
* Excercise 1
*
*/
/*

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    //change the background color using JS

    const colorPurple = '#a87882';
    const originalColor = '#F08080';

    document.getElementById("color-block").classList.toggle('highlighted');
    document.getElementById("color-name").innerHTML = colorPurple;
  
    if (document.getElementById("color-block").classList.contains("highlighted")) {
      document.getElementById("color-name").innerHTML = colorPurple;
    }
    else{
      document.getElementById("color-name").innerHTML = originalColor;
    }
}



/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
   
      function fahToCel(fahrenheit) {
         const celsius = Math.round((fahrenheit - 32) * (5/9));
         return celsius;
      }
   
      // Checks the value inside the Temperature input
      const numberTemp = document.getElementById("f-input").value;
      const result = fahToCel(numberTemp);
      document.getElementById("c-output").innerHTML = result;
}

document.getElementById("convertbtn").addEventListener("click", convertTemp);