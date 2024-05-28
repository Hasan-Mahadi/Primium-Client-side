import { useEffect, useState } from "react";

import AllServic from "./Shared/Allservic/AllServic";



const Products = () => {

    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data =>{
                const popularitems = data.filter(item => item);
                setMenu(popularitems)
            }) 
    }, [])




    return(

        <div>
            <h1 className="text-center font-bold text-3xl italic mt-10  "
                data-aos="flip-left">
                <img className='mx-auto pb-1' src="http://kodeforest.net/html/islamic/images/hdg-img.png"
                    alt="" />Take & Enroll Service </h1>
        <div className="grid md:grid-cols-3 mb-40 ml-20">
            {
                menu.map(item => <AllServic
                key={item._id}
                item={item}
                >
                </AllServic>)
            }

        </div>
        </div>
    )
};


export default Products;