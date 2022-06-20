import { useContext } from 'react';
import UserCard from '../components/userCards';
import SearchBar from '../components/searchBar';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

function Dashboard() {

  const {users, searchTerm, setSearchTerm, value, setValue, prev, handlePrev } = useContext(DataContext)

  return (
    
    <main className="min-h-screen  box-border">
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-4xl text-white p-4">Dashboard</h2>
                <p className="text-lg text-white p-3">See all the users on our platform!</p>
            </div>
        {prev[0] &&
                <div className="p-5 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-semibold text-white p-5 m-5">Previous User</h3>
                    <div className="w-10/12">
                        {prev[0] && prev.map(element => {
                        
                            const { name: {first, last}, picture: {large}, id } = element;
                            
                            return (
                                <Link to={`/${id}`} key={id} onClick={handlePrev} data-userid={id} className="w-full">     
                                    <UserCard key={id} first={first} last={last} picture={large} />
                                </Link>
                            )
                        })}
                    </div>
                </div>
        }
                <div className="w-screen">
                    <SearchBar setSearchTerm={setSearchTerm} value={value} setValue={setValue} />
                </div>
            </div>
        
            <div className="flex flex-col items-center gap-6">
                
            
            <div className="grid grid-cols-1 gap-[4rem] mt-3 p-5  items-center md:grid-cols-2 w-10/12 ">
                {users && users.filter(elements => {
                    if (!searchTerm) {
                        
                        return elements
                    
                    } else if (searchTerm) {
                        
                        if ((elements.name.first.toLowerCase().includes(searchTerm.toLowerCase()) || elements.name.last.toLowerCase().includes(searchTerm.toLowerCase()))) {
                            
                            return elements;
                        
                        }
                    }
                }).map(values => {
                    
                    const { name:{first, last}, picture:{large}, id } = values;
                    
                    return (
                    
                        <Link to={`/${id}`} key={id} onClick={handlePrev} data-userid={id} className="bg-slate-400 w-full rounded-lg" >    
                            <UserCard key={id} first={first} last={last} picture={large}   />
                        </Link>
                    )
                })}
            </div>
        </div>
    </main>
    
  )
}

export default Dashboard;
