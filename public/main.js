let deleteBtn = document.querySelectorAll('.deleteOne')


deleteBtn.forEach(function (button) {
  button.addEventListener('click', function () {
    const budgetName = this.parentNode.parentNode.childNodes[1].innerText
    fetch('/deleteBudget', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'budgetName': budgetName,
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});

let getCurrentBalanceButtons = document.querySelectorAll('.check')

getCurrentBalanceButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const budgetTitle = this.parentNode.parentNode.childNodes[1].innerText
    const budgetTotalAmount = this.parentNode.parentNode.childNodes[3].innerText
    const moneySpent = this.parentNode.parentNode.childNodes[5].innerText
    let remainingBalance = Math.floor(Number(budgetTotalAmount - moneySpent))

    fetch('checkItem', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'budgetName': budgetTitle,
        'totalBudget': budgetTotalAmount,
        'moneySpent': moneySpent,
        'remainingBalance': remainingBalance
      })
    }).then(response => {
      if (response.ok) return response.json()
    })
      .then(data => {
        window.location.reload()
        console.log('data', data.value)
      })
  });
});













/*Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const likes = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        
        fetch('thumbsUp', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'likes': likes,
            'action': 'like'
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const likes = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    fetch('thumbsDown', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'likes': likes,
        'action': 'dislike'
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});*/
