import './App.css'
import Card from './components/Card'

function App() {
  const myObj = {
    name:"nitesh",
    age:22
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
      <Card name = "nitesh" someObj = {myObj} btnText = "click me"/>
      <Card btnText = "visit me"/>
      <Card />
      <p>card is inserted</p>

    </>
  )
}

export default App
