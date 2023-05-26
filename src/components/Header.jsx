import { useLocation , useNavigate,  Link} from "react-router-dom"; // Import des hooks spécifique de React-Router-Dom

const Header = () => {
    
    const navigate = useNavigate(); // Pour utiliser navigate pour pouvoir effectuer les redirections
    const location = useLocation(); // Pour savoir dans quel route on est. Pour utiliser location.pathname
    console.log(location.pathname);

    return (
        <div>
            <h2>File d'ariane : {location.pathname}</h2>
            {location.pathname === "/" ? (<Link to="/about">about</Link>) : (
                <div>
                    <h1>barre de menu</h1>
                    <nav>
                        <Link to="/">Home</Link>
                        <br/>
                        <Link to="/about">about</Link>
                        <br/>
                        <Link to="/contact">contact</Link>
                        <br/>
                        <Link to="/product/12">product</Link>
                    </nav>
                </div>
            )}
            <br/>
            <button onClick={() => navigate(-1)}>Go back</button>
            <br/>
            <button onClick={() => navigate(1)}>
                Go forward
            </button>
        </div>
    );
};

export default Header;

/*
    <button onClick={() => {navigate("/");}}>Home</button>
    <button onClick={() => {navigate("/about");}}>About</button>
    <button onClick={() => {navigate("/contact");}}>contact</button>
    */