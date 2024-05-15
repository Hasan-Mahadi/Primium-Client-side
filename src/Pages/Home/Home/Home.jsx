
import Dua from "../../Dua";
import Membars from "../../Membars";
import Pillars from "../../Pillars";
import Services from "../../Services";
import Team from "../../Team";
import AboutUs from "../AboutUs/AboutUs";
import Benner from "../Benner/Benner";

const Home = () => {
    return (
        <div>
            <Benner ></Benner>
            <AboutUs></AboutUs>
            <Pillars></Pillars>
            <Services></Services>
            <Dua></Dua>
            <Membars></Membars>
            <Team></Team>
         


        </div>
    );
};

export default Home;