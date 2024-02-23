import rectangleImg from '../Assets/rectangle.png'
import './Pic.css'

function Pic(){
    return(
        <div className="picture">
            <img src={rectangleImg} alt="rectangle image" />
        </div>
    )
}


export default Pic