import { Link } from "react-router-dom";
import "../styles/styles.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";

const Firstpage = () => {

    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className="firstpage-container">
            {show ? <>

                <form className="firstpage-content">
                    <h1>FIRST STEP</h1>

                    <AiOutlineCloseCircle className="closebtn" onClick={handleClose} />
                    <input placeholder="FirstName" />
                    <input placeholder="LastName" />

                    <Link to="/secondpage"> <button>NEXT</button></Link>

                </form>
            </>
                :
                <p>WELCOME</p>
            }
        </div>
    )
}
export default Firstpage;