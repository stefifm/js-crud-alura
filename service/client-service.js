const createNewLine = (name, email) => {
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
            type="button"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>`

  line.innerHTML = content

  return line
}

const table = document.querySelector('[data-table]')

const clientList = () => {
  const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest()

    http.open('GET', 'http://localhost:3000/perfil')

    http.send()

    http.onload = () => {
      const res = JSON.parse(http.response)
      if (http.status >= 400) {
        reject(res)
      } else {
        resolve(res)
      }
    }
  })

  return promise
}

clientList().then(data => {
  data.forEach(profile => {
    const newLine = createNewLine(profile.nombre, profile.email)
    table.appendChild(newLine)
  })
}).catch(error => window.alert(`Ocurrió un error ${error}`))
