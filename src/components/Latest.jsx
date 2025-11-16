import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const Latest = () => {
    return (
        <div className="bg-base-200 flex gap-4 p-4 items-center">
            <Link to="/" className="bg-secondary text-white text-xl py-2 px-3">Latest</Link>
            <Marquee className="text-xl font-semibold"
            pauseOnHover={true}
            speed={100}
            >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
        </div>
    );
};

export default Latest;