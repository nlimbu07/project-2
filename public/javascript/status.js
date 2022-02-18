var statusDropDown = document.querySelector("#status-select");

async function selectStatus(event) {
    event.preventDefault();

    fetch(`/api/status`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        const statuses = data;
        
        for (var i = 0; i < statuses.length; i++) {
            var ddOption = document.createElement('option');
            ddOption.value = statuses[i].id;
            ddOption.innerText = statuses[i].status_name;
            statusDropDown.appendChild(ddOption);
        }
    });    
}

window.addEventListener('load', selectStatus);