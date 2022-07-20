import Statement from './components/statement.jsx'
import './App.css'

function App() {

  function renderList() {
    let content = []
    for (let i = 1; i <= 100; i++) {
      content.push(<Statement key={i} count={i} />)
    }
    return content
  }

  return (
    <div className="App">
      { renderList() }
    </div>
  )
}

export default App
