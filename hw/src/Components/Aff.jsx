import './Aff.css'
import Btn from '../Components/Btn'

function Aff(){
    return(
        <div className="container">
            <h3>404 page</h3>
            <h1 className="title"> Page Not Found</h1>
            <p className="para">Sorry, the page you are looking for doesn't exist. <br /> Here are some helpful links:</p>
            <Btn/>
        </div>
    )
}

export default Aff