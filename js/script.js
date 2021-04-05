function init(){
  function myEventFunction(){
    alert('Hello!');
  }
  
  var d4 = document.getElementById('entrybutton');
  var d5 = document.getElementById('entryinput');
  var d6 = document.getElementById('textoutput');
  
  d4.addEventListener('click', myEventFunction);
  
  d4.addEventListener('click', function(){
    console.log('I was Clicked!');	
  });

d5.value = 'Hunter Mede:';		  

function init(){
  function myEventFunction(){
    alert('d5.value');
  }; 

window.addEventListener('load', init);