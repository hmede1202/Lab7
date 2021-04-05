function init(){
  function myEventFunction(){
    alert('Hello!');
  }
  
  var d4 = document.getElementById('entrybutton');
  var d5 = document.getElementById('entryinput');
  var d6 = document.getElementById('textoutput');
  
  d4.addEventListener('click', myEventFunction);
  
  d4.addEventListener('click', function(){
    console.log('An Entry!!!');	
    alert(d4.value);
    dr
    d4.value = "Hunter Mede:"
  });



window.addEventListener('load', init);