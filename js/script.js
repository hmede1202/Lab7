function init(){
  function myEventFunction(){
    alert('Hello!')
  }
  
  var d4 = document.getElementById('entrybutton')
  
  d4.addEventListener('click', myEventFunction);
  
  d4.addEventListener('click', function(){
  		console.log('I was Clicked!');	
   });
   
  var d5 = document.getElementById('entryinput')
  var d6 = document.getElementById('textoutput')
  
   d5.addEventListener('click', function(){	
  		alert(d5.value);
  		d5.value = 'Hunter Mede:';
  		d6.innerHTML = 'd5';
  		});

window.addEventListener('load', init);