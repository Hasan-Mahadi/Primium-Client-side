import { useQuery } from "@tanstack/react-query";
import useAxiosSEcour from "../../../hooks/useAxiosSEcour";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const Allusers = () => {
    const axiosSecure = useAxiosSEcour();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;

        }


    })

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} has been saved`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }

    const handledeleteduser = user => {


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

                axiosSecure.delete(`/users/${user._id}`)
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
        <div>
            <h1 className="text-center font-bold text-4xl mt-14">All Users</h1>

            <div className="flex justify-evenly mt-10">
                <h2 className="text-2xl font-bold">All users</h2>
                <h2 className="text-2xl font-bold">Total users: {users.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra mt-5">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                       
                                       
                                       
                                      { user.role === 'admin' ? 'Admin' :
                                            <th>
                                                <button onClick={() =>
                                                    handleMakeAdmin(user._id)}
                                                      className="btn  
                                                          btn-lg bg-green-500"><FaUsers
                                                        className="text-white 
                                                   text-2xl 
                                                        h-4"></FaUsers></button>
                                            </th>
                                      } 
                                       
                                       
                                       
                                       

                                    </td>
                                    <td>

                                        <th>
                                            <button onClick={() => handledeleteduser(user._id)} className="btn btn-ghost 
                                                 btn-xs"><FaTrashAlt className="text-red-500 
                                           h-4"></FaTrashAlt></button>
                                        </th>
                                    </td>
                                </tr>)
                            }










                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
};

export default Allusers;