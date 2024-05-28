import { BsMessenger } from "react-icons/bs";
import { MdAddCall } from "react-icons/md";

const Callus = () => {
    return (



        <div>
            
            
            
            
            
            


            <div className="ml-96 mt-20 " data-aos="flip-right">
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Call For Any Fatwa or Masala</h2>
                        <p className="font-bold italic text-white text-warning">+8801766-624799</p>
                        <div className="card-actions mt-5 justify-end">
                            <button className="btn btn-success  ml-5"><MdAddCall />Calling...</button>
                            <button className="btn btn-warning bg-white"><BsMessenger />Messege</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Callus;