function init(){
  function myEventFunction(){
    alert('Hello')
  }
  
  var d4 = document.getElementById('container')
  
  d4.addEventListener('click', myEventFunction);
  
  d4.addEventListener('click', function()){
  		console.log('Clicked!');
  		alert(container.value);
  		container.value = 'javascript worked';
  };
  
}

window.addEventListener('load', init);
