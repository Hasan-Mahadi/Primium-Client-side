
import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();


    const handleGooglesignIn = () =>{
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })


    }

    return (
        <div>
            <div className="text-center mb-4">
                <button className="btn" onClick={handleGooglesignIn}>


                    <div className="flex">
                        <div>

                            <img className="w-10" src="data:image/png;base64,
                         iVBORw0KGgoAAAANSUhEUgAAADcAAAA4CAMAAABuU5ChAAAA+VBMVEX////
                         pQjU0qFNChfT6uwU0f/O4zvs6gfSJr/j6twDoOisjePPoNSXpPjDrWU/oLRr
                         +9vZ7pff/vAAUoUAkpEn0ran619b82pT7wgD+68j947H/+e7//PafvPm/
                         0vuBw5Df7+P63tz3xcPxl5HnJQ7qUEXxj4n4z83zoJzqSz/
                         vgXrucWrsY1r1tbHrSBPoOjbvcSr0kx74rRH80XntZC3xhSPmGRr86+r4sk/
                         936EJcfPS3/yowvnbwVKjsTjx9f5urEjkuBu9tC
                         +ErkJyvoRRpj2az6hWs23j6/
                         0emX2z2btAiuI8k8AyqkE5nZU1pGxCiOxVmtHJ5M
                         +PSt3WAAACGElEQVRIieWSa3fSQBCGk20CJRcW2AWKxgJtqCmieNdatV5SUt
                         Fq5f//GJeE7CXJJOT4TZ+PO+c58+7MaNr/
                         SWd60mecTDs1pMFp28dODPZnZw/
                         369TXseXqHNfCblDdte84krTDwUFFwnMnJyXm+bSsmZ/vlcb1
                         +6A2x5C1xYeyPgIyJlhtYDjzjOYyZA3oFighLYxni8UMY6dCG/
                         jy9KzTQfI8DXSnTNN0kcl1lNE9dlxYC8TnnEVmAJ02qHlPllyb58vgmQ2Np0
                         tYgzGMo2ex6IKRihi1mPhcZyYuO8McL4yYl0vrrI6mJZpx9Or1mzqa10rFt8
                         p7o5ArXh+lXutC8d6ZBdiXvH6PeyPFsw8KMBu8fsG9+3t473l9yD1vD+/
                         BX3v1cgqv3lzE/8A9NCUK5sn33vugeN1DQTcVTbG/9M56H
                         +lEAzg2d54t7iW5657xCdEx5PF
                         +B9Lj9oO9z4hBgIZX6YyaXfmZaV9QQkU781h+Hra
                         +7jQaFv6Or8RW3r1rhErES641D9XKigox8jJaQxyAfZOpIQm6kiuT6Bvfujq
                         VuEpkkY43u+d1RBBF35v55aVJidKSEBRFiJAk/+0PM3NjgjFFMLc/
                         WVYzlzImLBPprzvzrlBjHUmZSH8DmqatS0QSZtcjTxUBWSlZw1bckhaYlIST
                         cm1rIqKolJJxtRWnXUVscTFsjWFFwoy7WTM2+zX69/
                         gDaLcy7SET9nsAAAAASUVORK5CYII=" alt="" />
                         
                                                 </div>
                                                 <div className="mt-2 font-bold italic">
                                                    oogle
                                                 </div>
                    </div>

                </button>
            </div>

        </div>
    )
};

export default SocialLogin;