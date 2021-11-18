console.log('Hello World')

createContainer()

function createContainer(){
    const body = document.querySelector('body')

    const container = document.createElement('div')
    container.setAttribute('id', 'container')
    container.textContent = 'Это контейнер'
    body.append(container)
}