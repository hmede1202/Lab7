function init(){
  function myEventFunction(){
    alert('Hello')
  }
  
  var d4 = document.getElementById('entryinput')
  
  d4.addEventListener('click', myEventFunction);
  
  d4.addEventListener('click', function()){
  		console.log('Clicked!');
  		alert(entryinput.value);
  		entryinput.value = 'javascript worked';
  };
  
}

window.addEventListener('load', init);
