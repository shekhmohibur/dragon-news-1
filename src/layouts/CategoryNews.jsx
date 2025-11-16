import { use } from "react";

const categoryPromise = fetch('categories.json').then(res => res.json());
const CategoryNews = () => {
    const categories = use(categoryPromise)
    return (
        <div>
            <h2 className='font-semibold'>All Categories</h2>
        </div>
    );
};

export default CategoryNews;