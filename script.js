 function ageInDays (){
    var birthYear =  prompt('What year were you born...Good Friend?');
    var dayCalc = (2022-birthYear)*365;
    var h1 = document.createElement('h1');
    var text = document.createTextNode('You are '+dayCalc+' days old.');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(text);
    document.getElementById('result').appendChild(h1); 
     
 } 
 function reset (){
     document.getElementById('ageInDays').remove();
 }
 

