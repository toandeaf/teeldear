import './App.css'
import Navbar from './components/Navbar/Navbar.tsx'
import View from './components/View/View.tsx'

function App() {
  // const [greetMsg, setGreetMsg] = useState('')
  // const [name, setName] = useState('')
  //
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke('greet', { name }))
  // }

  return (
    <main className="appContainer">
      <div className="mainContainer">
        <Navbar />
        <View />
      </div>
    </main>
  )
}

export default App
