console.log('App.js is running!')

const app = {
  title: 'Indecision',
  subtitle: 'This is some info',
  options: []
}

const onFormSubmit = e => {
  e.preventDefault()

  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    renderIndecisionApp()
  }
}

const removeAll = e => {
  e.preventDefault()

  app.options = []
  renderIndecisionApp()
}

const appRoot = document.getElementById('app')

const renderIndecisionApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1> 
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Your options: ' + app.options.join(" ") : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderIndecisionApp()