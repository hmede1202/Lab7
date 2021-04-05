function init(){
  function myEventFunction(){
    alert('Hello!');
  }
  
  var d4 = document.getElementById('entrybutton');

  d4.addEventListener('click', myEventFunction);
  
  d4.addEventListener('click', function(){
    console.log('An Entry!!!');	
    alert(d4.value);
    dr
    d4.value = "Hunter Mede:"
  });

window.addEventListener('load', init);