import React from 'react';
import SocialLogin from './SocialLogin';
import FindUsOn from './FindUsOn';
import Qzone from './Qzone';
import Advertisement from './Advertisement';

const RightAside = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUsOn></FindUsOn>
            <Qzone></Qzone>
            <Advertisement></Advertisement>
        </div>
    );
};

export default RightAside;