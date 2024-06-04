import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${}?fontSize=50&fontColor=red'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const firstWord = fact.split(' ')[0]
        // const threeFirstWords = fact.split(' ', 3).join(' ')

        console.log(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { _id } = response
            const url = `/cat/${_id}/says/${firstWord}`
            console.log(url)
            setImageUrl(url)
          })
      })
  }, [])

  return (
    <main>
      <h1> App de gatitos </h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first word for ${fact}`} />}
    </main>
  )
}
