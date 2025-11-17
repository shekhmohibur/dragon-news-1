import React from 'react';
import swimming from '../../assets/swimming.png';
import classroom from '../../assets/class.png';
import playground from '../../assets/playground.png';
const Qzone = () => {
    return (
        <div className='mt-5 bg-base-200 p-4'>
            <h2 className='font-semibold'>Q-zone</h2>
            <div className="flex flex-col gap-4 mt-4">
                <img src={swimming} alt='swimming'/>
                <img src={classroom} alt='classroom'/>
                <img src={playground} alt='playground'/>
            </div>
        </div>
    );
};

export default Qzone;