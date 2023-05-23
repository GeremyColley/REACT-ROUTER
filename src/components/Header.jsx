import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div>
            <button onClick={() => {navigate("/");}}>Home</button>
            <button onClick={() => {navigate("/about");}}>About</button>
            <button onClick={() => {navigate("/contact");}}>contact</button>
        </div>
    );
};

export default Header;