import { clientService } from '../service/client-service.js'

const form = document.querySelector('[data-form]')

const getInformation = async () => {
  const url = new URL(window.location)
  const id = url.searchParams.get('id')

  if (id === null) return (window.location.href = '../screens/error.html')

  const nombre = document.querySelector('[data-nombre]')
  const email = document.querySelector('[data-email]')

  try {
    const profile = await clientService.detailClient(id)

    if (profile.nombre && profile.email) {
      nombre.value = profile.nombre
      email.value = profile.email
    } else {
      throw new Error()
    }
  } catch (error) {
    window.location.href = '../screens/error.html'
  }
}

getInformation()

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const nombre = document.querySelector('[data-nombre]').value
  const email = document.querySelector('[data-email]').value

  const url = new URL(window.location)
  const id = url.searchParams.get('id')

  try {
    await clientService.updateClient(nombre, email, id)
    window.location.href = '../screens/edicion_concluida.html'
  } catch (error) {
    window.location.href = '../screens/error.html'
  }
})
