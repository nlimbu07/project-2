var leadsourceDropDown = document.querySelector("#lead-source-select");

async function selectLeadSource(event) {
    event.preventDefault();

    fetch(`/api/leadsource`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        const lead_sources = data;
        
        for (var i = 0; i < lead_sources.length; i++) {
            var ddOption = document.createElement('option');
            ddOption.value = lead_sources[i].id;
            ddOption.innerText = lead_sources[i].lead_source_name;
            leadsourceDropDown.appendChild(ddOption);
        }
    });    
}

window.addEventListener('load', selectLeadSource);