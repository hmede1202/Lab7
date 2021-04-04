function init(){
  function myEventFunction(){
    alert('Hello')
  }
  
  var d4 = document.getElementById('entryinput')
  
  d4.addEventListener('enter', myEventFunction);
  
  d4.addEventListener('enter', function()){
  		console.log('An Entry!');
  		alert(entrybutton.value);
  		entrybutton.value = 'javascript worked';
  };
  
}

window.addEventListener('load', init);
