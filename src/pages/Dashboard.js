import UserCard from '../components/userCards';
import SearchBar from '../components/searchBar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectPrevious, selectAllUsers } from '../features/users/usersSlice';
import useSearch from '../hooks/useSearch';

function Dashboard() {
    const dispatch = useDispatch();
    const { searchTerm, setSearchTerm } = useSearch();
    const users  = useSelector(selectAllUsers);
    const previous = useSelector(state => state.users.previous)

    let displayUsers = users.filter((user) => {
        if (searchTerm) {
                        
            if ((user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) || user.name.last.toLowerCase().includes(searchTerm.toLowerCase()))) {
                
                return user;
            
            }
        }
        return !searchTerm;
    }).map(user => (
        <Link to={`/user/${user.id}`} key={user.id} onClick={() => dispatch(selectPrevious(user.id))} data-userid={user.id} className="bg-slate-400 w-full rounded-lg" >
            <UserCard key={user.id} first={user.name.first} last={user.name.last} id={user.id} picture={user.picture.large}  />
        </Link>
    ))

    
    let displayPreviousUsers = previous.map(prev => (
        <div className="p-5 flex flex-col justify-center items-center" key={prev.id}>
        <h3 className="text-xl font-semibold text-white p-5 m-5">Previous User</h3>
        <div className="w-10/12"> 
            <Link to={`/user/${prev.id}`} key={prev.id} onClick={() => dispatch(selectPrevious(prev.id))} data-userid={prev.id} className="w-full">     
                <UserCard key={prev.id} first={prev.name.first} last={prev.name.last} picture={prev.picture.large} />
            </Link>   
        </div>
    </div>
    ))
        
    
  

  return (
    
    <main className="min-h-screen  box-border">

        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-4xl text-white p-4">Dashboard</h2>
                <p className="text-lg text-white p-3">See all the users on our platform!</p>
            </div>
            {displayPreviousUsers}
            <div className="w-screen">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
        </div>
        
        <div className="flex flex-col items-center gap-6">
            <div className="grid grid-cols-1 gap-[4rem] mt-3 p-5  items-center md:grid-cols-2 w-10/12 ">
               {displayUsers}
            </div>
        </div>

    </main>
    
  )
}

export default Dashboard;
