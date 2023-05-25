import useTitle from "../../components/useTitle";
import Banner from "./Banner";
import BristoSec from "./BristoSec";
import Category from "./Category";
import Contact from "./Contact";
import PopularMenu from "./PopularMenu";
import Recommed from "./Recommed";
import Testimonial from "./Testimonial";
import Featured from "./feature/Featured";

 

const Home = () => {
    useTitle('home')
    return (
        <div>
            <Banner></Banner>
            <BristoSec></BristoSec>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Recommed></Recommed>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;