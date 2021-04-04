function init(){
  function myEventFunction(){
    alert('Hello!')
  }
  
  var d4 = document.getElementById('entrybutton')
  
  var d5 = document.getElementById('textoutput')
  
  d4.addEventListener('click', myEventFunction);
  
  d4.addEventListener('click', function(){
  		console.log('I was Clicked!');		
  		alert(d5.value);
  		d5.value = 'Hunter Mede:';
  });
  
}

window.addEventListener('load', init);
