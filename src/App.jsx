import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { Otro } from './Components/Otro'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1> App de gatitos </h1>
      <button onClick={handleClick}> Get new Fact </button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${imageUrl}`} alt={`Image extracted using the first word for ${fact}`} />}
      { /* <Otro /> */}
    </main>
  )
}
