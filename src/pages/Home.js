import crowd from '../assets/crowd.jpeg'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineCake } from 'react-icons/md'
import { FaAddressCard } from 'react-icons/fa'

const Home = () => {
    return (
        <main className="min-h-screen  box-border">
           <div className="flex flex-col items-center justify-around gap-3 lg:flex-row">
                <div className="w-10/12 flex flex-col items-center justify-center bg-purple-500 my-10 rounded-lg px-5">
                    <h1 className="text-2xl text-center text-white my-5">Welcome to Random User Book</h1>
                    <p className="text-md text-white my-5">Find all Your friends!</p>
               </div>
               <img src={crowd} alt="crowd" className="w-full mt-5 lg:rounded lg:w-[800px]" />
           </div>
           <div className="flex flex-col items-center justify-center gap-3">
               <div className="w-10/12 my-10 bg-violet-500 p-5 rounded">
                   <h3 className="text-white py-5 text-center text-xl">Go to the Dashboard and Find your Friends</h3>
                   <div className="grid grid-cols-[minmax(0,60px)_1fr] items-center justify-around">
                        <AiOutlineSearch className="text-white text-lg"/>
                        <p className="text-white py-5">Use the Search Bar to look for your friends Fast and Easy</p>
                   </div>
                   <div className="grid grid-cols-[minmax(0,60px)_1fr] items-center justify-around">
                        <MdOutlineCake className="text-white text-lg"/>
                        <p className="text-white py-5">Know when it's your friend's Birthday</p>
                   </div>
                   <div className="grid grid-cols-[minmax(0,60px)_1fr] items-center justify-around">
                        <FaAddressCard className="text-white text-lg"/>
                        <p className="text-white py-5">Send Them a Post Card for their Birthday!</p>
                   </div>
               </div>
           </div>
        </main>
    )
}

export default Home;