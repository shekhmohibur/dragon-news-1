import logo from '../assets/logo.png';
const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center py-4">
            <img src={logo} alt="Dragon News logo" />
            <p>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;