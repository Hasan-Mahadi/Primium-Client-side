import './Header.css';

const Header = () => {
    return (
        <div className='full-page-bg1  rounded-2xl'>

            <div className='flex'>
                <div className=''>
                    <img className='w-14 h-14 ml-10 mt-5  rounded-full' src="https://img.freepik.com/free-vector/realistic-eid-al-fitr-illustration_52683-59773.jpg?t=st=1709752824~exp=1709756424~hmac=481371ecf369d97ca3d857af10f5f80fe3d77724e46101780301397e36a36d98&w=740" alt="" />
                </div>

                <div>
                    <h1 className='pt-5 pl-3 font-bold italic text-black text-4xl'>Islamic Center</h1>
                </div>



                <div className='pl-32 pr-12 font-bold mt-5 flex text-2xl flex   grid grid-cols-5    '>
                    <div className='ml-5 btn btn-outline btn-accent  rounded-full  shadow-2xl bg-black'>
                        Fajr
                       
                        <p className='text-lg '>5:30</p>
                    </div>
                    <div className='ml-5 btn btn-outline btn-accent  rounded-full  shadow-2xl bg-black'>
                        Dhur
                        <p className='text-lg'>1:30</p>
                    </div>
                    <div className='ml-5 btn btn-outline btn-accent  rounded-full  shadow-2xl bg-black'>
                        Asar
                        <p className='text-lg'>5:00</p>
                    </div>
                    <div className='ml-5 btn btn-outline btn-accent  rounded-full  shadow-2xl bg-black'>
                        Magrib
                        <p className='text-lg'>6:45</p>
                    </div>
                    <div className='ml-5 btn btn-outline btn-accent  rounded-full  shadow-2xl bg-black'>
                        Esha

                        <p className='text-lg'>8:30</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Header;