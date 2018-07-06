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
  app.options = []
  renderIndecisionApp()
}


const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  alert(option)
}

const appRoot = document.getElementById('app')

const renderIndecisionApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1> 
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Your options: ' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <ol>
        { app.options.map(option => <li key={option}>{option}</li>) }
      </ol>
      <button onClick={removeAll}>Remove All</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" autoComplete="off"/>
        <button>Add Option</button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderIndecisionApp()