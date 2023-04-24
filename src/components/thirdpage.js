import "../styles/styles.scss";
import { Link } from "react-router-dom";

const Thirdpage = () => {
    
    return (
        <div className="thirdpage-container">
            <form className="thirdpage-content">
                <h1>THIRD STEP</h1>

                <input placeholder="Email" type={"email"}/>
                <input placeholder="Password" type={"password"}/>

                <span>
                <Link to="secondpage"> <button>PREV</button></Link>
                <Link to="firstpage"> <button>SUBMIT</button></Link>
                </span>

            </form>
        </div>
    )
}
export default Thirdpage;