const clientList = () =>
  fetch('http://localhost:3000/perfil').then(response => response.json())

const createClient = (nombre, email) => {
  return fetch('http://localhost:3000/perfil', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() })
  })
}

const deleteClient = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: 'DELETE'
  })
}

const detailClient = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`)
    .then(response => response.json())
}

const updateClient = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ nombre, email })
  })
    .then(response => response)
    .catch(error => console.log(error))
}

export const clientService = {
  clientList,
  createClient,
  deleteClient,
  detailClient,
  updateClient
}
