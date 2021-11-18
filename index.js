

createContainer()

function createContainer() {
    const body = document.querySelector('body')

    const container = document.createElement('div')
    container.setAttribute('id', 'container')

    const title = document.createElement('h1')
    title.innerText = 'Заголовок'

    const date = document.createElement('span')
    setInterval(() => {
        date.innerText = new Date().toLocaleString('ru')
    }, 1000)

    const form = createForm()
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        inputValue.textContent = `Вы ввели: ${document.querySelector("input[name='input']").value}`
    })

    const inputValue = document.createElement('p')

    container.prepend(inputValue)
    container.prepend(form)
    container.prepend(title)
    container.append(date)

    body.append(container)
}

function createForm() {
    const form = document.createElement('form')
    form.setAttribute('class', 'form')

    const input = document.createElement('input')
    input.name = 'input'
    input.placeholder = 'Введите данные...'

    const button = document.createElement('button')
    button.type = 'submit'
    button.innerText = 'отправить'

    form.append(input, button)

    return form
}