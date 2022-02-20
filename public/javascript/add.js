async function newContactFormHandler(event) {
    event.preventDefault();
  
    const first_name = document
      .querySelector('input[name="first-name"]')
      .value.trim();
    const last_name = document
      .querySelector('input[name="last-name"]')
      .value.trim();
    const phone = document.querySelector('input[name="phone"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const status_id = document.querySelector('select[name="status_id"]').value.trim();
    const lead_source_id = document.querySelector('select[name="lead-source_id"]').value.trim();
    const user_id = document.querySelector('select[name="user_id"]').value.trim();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const notes = document.querySelector('textarea[name="notes"]').value;
  
    const response = await fetch(`/api/contacts/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        email: email,
        notes: notes,
        status_id: status_id,
        lead_source_id: lead_source_id,
        user_id: user_id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Invalid Entry');
    }
  }
  
  document
    .querySelector('.edit-contact-form')
    .addEventListener('submit', newContactFormHandler);
  