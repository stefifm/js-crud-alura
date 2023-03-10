import { clientService } from '../service/client-service.js'

const form = document.querySelector('[data-form]')

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const nombre = document.querySelector('[data-nombre]').value // para obtener el valor de nombre
  const email = document.querySelector('[data-email]').value // para obtener el valor

  try {
    await clientService.createClient(nombre, email)
    window.location.href = '../screens/registro_completado.html'
  } catch (error) {
    window.location.href = '../screens/error.html'
  }
})
