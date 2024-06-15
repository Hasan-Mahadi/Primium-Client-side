import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSEcour from "../../../hooks/useAxiosSEcour";


const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSEcour();

    const handledelete = id => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })
            }
        });

    }

    return (

        <div >
            <div>
                <h2 className="text-4xl mt-10 font-bold text-center pb-5">My Cart</
                h2>
            </div>
            <div className="flex justify-evenly pb-5">
                <h2 className="text-2xl font-bold text-center mt-10">Items
                    {cart.length}</h2>
                <h2 className="text-2xl font-bold text-center mt-10">Total Price: ${totalPrice}</h2>
                <button className="btn btn-primary mt-8">Pay</button>

            </div>
            <div className="overflow-x-auto ml-10">
                <table className="table">
                    {/* he className=""ad */}
                    <thead className="" >
                        <tr className="">
                            <th className="text-black">
                                #
                            </th>
                            <th><p className="text-black">Image</p></th>
                            <th><p className="text-black">Name</p></th>
                            <th><p className="text-black">Price</p></th>
                            <th><p className="text-black">Action</p></th>
                            <div className="divider"></div>
                        </tr>

                    </thead>
                    <tbody>


                        {

                            cart.map((item, index) => <tr key={item._id}>
                                <th>

                                    {index + 1}


                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>




                                    </div>
                                </td>
                                <td>

                                    {item.name}

                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button onClick={() => handledelete(item._id)} className="btn btn-ghost btn-xs"><FaTrashAlt className="text-red-500 h-4"></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }



                    </tbody>

                </table>
            </div>
        </div>



    );

};
export default Cart;