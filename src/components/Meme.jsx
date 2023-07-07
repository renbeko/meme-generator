import { React, useState, useEffect } from 'react'
const Meme = (props) => {
    const [allMemeImages, setAllMemeImages] = useState([])

    const [memeImage, setMemeImage] = useState({
        topText: "",
        bottomText: "",
        randomImage: 'http://i.imgflip.com/1bij.jpg',
    })



    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target

        setMemeImage(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    
    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        setMemeImage(prevState => ({
            ...prevState,
            randomImage: allMemeImages[randomNumber].url
        }))
    }

    return (
        <main>
            <div action="#" className="form">
                <input onChange={handleChange} type="text" name="topText" className="form--input form--input-1" />
                <input onChange={handleChange} type="text" name="bottomText" className="form--input form--input-2" />
                <input name="randomImage" onClick={getMemeImage}
                    className="form--submit" type="submit" value="Get a new meme image  🖼" />
            </div>
            <div className="img--container">
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
                <img
                    className="meme--img"
                    src={memeImage.randomImage} />
            </div>
        </main>
    )
}

export default Meme