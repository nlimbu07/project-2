var userDropDown = document.querySelector("#user-select");

async function selectUsers(event) {
    event.preventDefault();

    fetch(`/api/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        const users = data;
        
        for (var i = 0; i < users.length; i++) {
            var ddOption = document.createElement('option');
            ddOption.value = users[i].id;
            ddOption.innerText = users[i].username;
            userDropDown.appendChild(ddOption);
        }
    });    
}

window.addEventListener('load', selectUsers);