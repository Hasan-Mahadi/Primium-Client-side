import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSEcour = () => {

    return axiosSecure;




};

export default useAxiosSEcour;