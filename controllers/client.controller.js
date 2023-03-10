import { clientService } from '../service/client-service.js'

const createNewLine = (name, email, id) => {
  const line = document.createElement('tr')
  const content = `
    <td class="td" data-td>${name}</td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
          >Editar</a>
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button" id=${id}
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>`

  line.innerHTML = content

  const btn = line.querySelector('button')
  btn.addEventListener('click', () => {
    const id = btn.id
    clientService.deleteClient(id).then(res => {
      console.log(res)
    }).catch(error => console.log(error))
  })
  return line
}

const table = document.querySelector('[data-table]')

clientService.clientList().then(data => {
  data.forEach(({ nombre, email, id }) => {
    const newLine = createNewLine(nombre, email, id)
    table.appendChild(newLine)
  })
}).catch(error => window.alert(`Ocurrió un error ${error}`))
