async function editFormHandler(event) {
  event.preventDefault();

  const first_name = document
    .querySelector('input[name="first-name"]')
    .value.trim();
  const last_name = document
    .querySelector('input[name="last-name"]')
    .value.trim();
  const phone = document.querySelector('input[name="phone"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const status = document.querySelector('input[name="status"]').value.trim();
  const lead_source = document
    .querySelector('select[name="lead-source"]')
    .value.trim();
  const username = document.querySelector('input[name="user"]').value.trim();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const notes = document.querySelector('textarea[name="notes"]').value;

  const response = await fetch(`/api/contacts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      phone: phone,
      email: email,
      notes: notes,
      status_id: status,
      lead_source_id: lead_source,
      user_id: username,
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
  .addEventListener('submit', editFormHandler);
