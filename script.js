// Task1 

function myFunc(a,b) {
  if (a===b) {
    return "Its equal";
  }
  else { 
    return "Its not equal"
      }
}



// Task2 

function toCelsius(far) {
  if (typeof far === "number") 
  {
    return (far-32)/1.8;
  }
   else {
    return false;
  }


}

// Task3 

function func (a,b,operation) {

   if (typeof a !="number" || typeof b !="number") {
        return false; }
    if (operation === "-")
        return a-b;
    else if (operation === "+")
       return a+b;
    else if (operation === "*")
       return a*b;
    else if (operation === "/")
       return a/b;
   }


