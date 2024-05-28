
import { Helmet } from "react-helmet-async";
import Dua from "../../Dua";
import Membars from "../../Membars";
import Pillars from "../../Pillars";
import Services from "../../Services";
import Team from "../../Team";
import Testmoniyal from "../../Testmoniyal";
import AboutUs from "../AboutUs/AboutUs";
import Benner from "../Benner/Benner";
import Callus from "../../Callus";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Islamic Center | </title>
            </Helmet>
            <Benner ></Benner>
            <AboutUs></AboutUs>
            <Pillars></Pillars>
            <Services></Services>
            <Dua></Dua>
            <Membars></Membars>
            <Team></Team>
            <Callus></Callus>
            <Testmoniyal></Testmoniyal>
         
          
         


        </div>
    );
};

export default Home;