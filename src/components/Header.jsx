import trollFace from '../assets/icons/troll-face.png'

const Header = () => {
    return (
        <header className="header">
            <div className="header--left">
                <img src={trollFace} />
                <h2 className="header--title">Meme Generator</h2>
            </div>
            
        </header>
    )
}

export default Header