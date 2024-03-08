import Name from './name';

const username = "jatin"
//inside curly braces {} we write evaluated expression. not an expression which is not yet evaluated written inside 
// curly braces

function App() {
  return (
    <>
      <h1>hello duniya i am {username}</h1>
      <Name />
      <p>this is a paragraph</p>
    </>
  )
}

export default App
