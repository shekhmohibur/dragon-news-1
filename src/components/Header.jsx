import { format } from 'date-fns';
import logo from '../assets/logo.png';
const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center py-4 gap-2">
            <img src={logo} alt="Dragon News logo" />
            <p className='text-accent text-lg'>Journalism Without Fear or Favour</p>
            <p className='text-accent font-semibold text-xl'>
                {
                    format(new Date(), 'EEEE, MMMM dd, yyyy')
                }
            </p>
        </div>
    );
};

export default Header;