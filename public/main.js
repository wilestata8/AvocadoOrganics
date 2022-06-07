const trash = document.getElementsByClassName("fa-trash");


Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
 
    fetch('items', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name
        
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});









