import { Link, Outlet } from "react-router-dom";


const About = () => {
    return (
        <div>
            <h1>About</h1>
            <nav>
                <Link to="/about/me">Me</Link>
                <br/>
                <Link to="/about/You">You</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default About;