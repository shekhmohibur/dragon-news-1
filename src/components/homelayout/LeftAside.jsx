import React, { Suspense } from 'react';
import CategoryNews from '../../layouts/CategoryNews';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={
                <span class="loading loading-dots loading-md"></span>
            }>
                <CategoryNews></CategoryNews>
            </Suspense>
        </div>
    );
};

export default LeftAside;