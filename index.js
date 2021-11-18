console.log('Hello World')

createContainer()

function createContainer() {
    const body = document.querySelector('body')

    const container = document.createElement('div')
    container.setAttribute('id', 'container')
    container.innerHTML = "<p>Это контейнер</p>"

    const title = document.createElement('h1')
    title.innerText = 'Заголовок'

    const date = document.createElement('span')
    setInterval(() => {
        date.innerText = new Date().toLocaleString('ru')
    }, 1000)

    container.prepend(title)
    container.append(date)

    body.append(container)
}