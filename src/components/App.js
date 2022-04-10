// create your App component here
import { useState, useEffect } from "react"
import React from 'react'


function App() {
    const [image, setImage] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)
    
    useEffect(()=> {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => 
            {setImage(data.message)
            setIsLoaded(true)})
    }, [])

    if (!image) return <p>Loading...</p>

  return (

    // !image ?  <p>Loading...</p> : <img src={image} alt="A Random Dog"/>
    <img src={image} alt="A Random Dog"/>

  )
}

export default App