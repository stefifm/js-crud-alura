import { clientService } from '../service/client-service.js'

const form = document.querySelector('[data-form]')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const nombre = document.querySelector('[data-nombre]').value // para obtener el valor de nombre
  const email = document.querySelector('[data-email]').value // para obtener el valor

  clientService.createClient(nombre, email).then(() => {
    window.location.href = '/screens/registro_completado.html'
  }).catch(error => console.log(error))
})
