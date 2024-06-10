import { useQuery } from "@tanstack/react-query";
import useAxiosSEcour, {} from "./useAxiosSEcour";
import useAuth from "./useAuth";


const useCart = () => {

    // tan stack query
    const axiosSecure = useAxiosSEcour();
    const {user} = useAuth();
    const { refetch,data: cart = []} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }

    })
    return[cart, refetch]



};

export default useCart;