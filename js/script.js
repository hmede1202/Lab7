function init(){
 
  
  var d4 = document.getElementById('entrybutton');
  var d5 = document.getElementById('entryinput');
  var d6 = document.getElementById('textoutput');

  
  d4.addEventListener('click', function(){
  alert("Hunter Mede:" + d5.value); 
  d6.innerHTML="";
  d6.innerHTML= d5.value;
  });

}

window.addEventListener('load', init);