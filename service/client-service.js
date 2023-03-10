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
export const clientService = {
  clientList,
  createClient,
  deleteClient
}
