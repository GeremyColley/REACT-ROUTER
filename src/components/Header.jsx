import { useLocation , Link} from "react-router-dom"; // Import des hooks spécifique de React-Router-Dom

const Header = () => {
    
    //const navigate = useNavigate(); // Pour utiliser navigate pour pouvoir effectuer les redirections
    const location = useLocation(); // Pour savoir dans quel route on est. Pour utiliser location.pathname
    console.log(location.pathname);

    return (
        <div>
            <h2>{location.pathname}</h2>
            {location.pathname === "/" ? null :(
                <div>
                    <h1>barre de menu</h1>
                </div>
            )}
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
        </div>
    );
};

export default Header;

/*
    <button onClick={() => {navigate("/");}}>Home</button>
    <button onClick={() => {navigate("/about");}}>About</button>
    <button onClick={() => {navigate("/contact");}}>contact</button>
    */