import { NavLink } from 'react-router';
import userIcon from '../assets/user.png';
const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-4">
            <div className="user-info">
                <h2 className="font-semibold">Dragon News</h2>
            </div>
            <div className="nav hidden md:flex justify-center gap-6 text-accent">
                <NavLink className="btn bg-base-100 border-0 text-accent" to="/">Home</NavLink>
                <NavLink className="btn bg-base-100 border-0 text-accent" to="/about">About</NavLink>
                <NavLink className="btn bg-base-100 border-0 text-accent" to="/career">Career</NavLink>
            </div>
            <div className="dropdown md:hidden">
            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>
            <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  p-2 shadow">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/career"}>Career</NavLink>
            </ul>
    </div>
            <div className="login-btn flex items-center gap-2">
                <img src={userIcon} alt="" />
                <button className="btn text-white bg-primary px-5">Login</button>
            </div>
        </div>
    );
};

export default Navbar;