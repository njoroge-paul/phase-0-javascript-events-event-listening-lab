function addingEventListener() {
    const button = document.getElementById('button');
    button.addEventListener('click', function() {
      console.log('Button clicked!');
    });
  }
  
  module.exports = addingEventListener;