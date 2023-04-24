import "../styles/styles.scss";
import { Link } from "react-router-dom";


const Secondpage = ()=>{

    return (
        <div className="secondpage-container">
            <form className="secondpage-content">
                <h1>SECOND STEP</h1>

                <input placeholder="Phone No" />
                <textarea placeholder="Address" />

                <span>
                <Link to="/firstpage"> <button>PREV</button></Link>
                <Link to="/thirdpage"> <button>NEXT</button></Link>
                </span>

            </form>
        </div>
    )
}
export default Secondpage;