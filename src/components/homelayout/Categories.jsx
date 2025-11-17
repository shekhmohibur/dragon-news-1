import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch('/categories.json').then(res => res.json());
const Categories = () => {
    const categories = use(categoryPromise)
    return (
        <div>
            <h2 className='font-semibold'>All Categories</h2>
            <div className="flex flex-col mt-5">
                {
                    categories.map(category => <NavLink
                        key={category.id}
                        className="py-3 text-accent btn bg-base-100 border-0 hover:bg-base-200 text-xs md:text-lg"
                        to={`/category/${category.id}`}
                    >
                        {category.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;