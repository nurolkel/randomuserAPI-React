import { useContext, useEffect, useRef } from 'react';
import UserCard from '../components/userCards';
import SearchBar from '../components/searchBar';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { useDispatch, useSelector } from 'react-redux';
import { selectPrevious, inputSearch } from '../features/users/usersSlice';
import useSearch from '../hooks/useSearch';

function Dashboard() {

  //const {users, searchTerm, setSearchTerm, value, setValue, prev, handlePrev } = useContext(DataContext)

    const dispatch = useDispatch();
    const { searchTerm, setSearchTerm } = useSearch();
    const { users, previous } = useSelector(state => state.users);
    let previousUser = users.find(user => user.id === previous);

    

//   useEffect(()=> {
//       if (!users) {
//           JSON.parse(localStorage.getItem('users'))
//       }
//   },[users])

//   useEffect(()=> {
//       if (!previous) {
//         JSON.parse(localStorage.getItem('previous'))
//       } 
//   },[previous])

//   useEffect(() =>{
//       if (users) {
//           localStorage.setItem('users',JSON.stringify(users))
//       }
//   },[users])
  
//   useEffect(()=>{
//       if (previous) {
//           localStorage.setItem('previous',JSON.stringify(previous))
//       }
//   },[previous])

  return (
    
    <main className="min-h-screen  box-border">
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-4xl text-white p-4">Dashboard</h2>
                <p className="text-lg text-white p-3">See all the users on our platform!</p>
            </div>
            {previousUser &&
                <div className="p-5 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-semibold text-white p-5 m-5">Previous User</h3>
                    <div className="w-10/12"> 
                        <Link to={`/user/${previousUser.id}`} key={previousUser.id} onClick={() => dispatch(selectPrevious(previousUser.id))} data-userid={previousUser.id} className="w-full">     
                            <UserCard key={previousUser.id} first={previousUser.name.first} last={previousUser.name.last} picture={previousUser.picture.large} />
                        </Link>   
                    </div>
                </div>
            }
            <div className="w-screen">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
        </div>
        
        <div className="flex flex-col items-center gap-6">
                
            
            <div className="grid grid-cols-1 gap-[4rem] mt-3 p-5  items-center md:grid-cols-2 w-10/12 ">
                {users &&  users.filter((elements) => {
                    if (searchTerm) {
                        
                        if ((elements.name.first.toLowerCase().includes(searchTerm.toLowerCase()) || elements.name.last.toLowerCase().includes(searchTerm.toLowerCase()))) {
                            
                            return elements;
                        
                        }
                    }
                    return !searchTerm;
                }).map(values => {
                    const { name:{first, last}, picture:{large}, id } = values;
                    return (
                    
                        <Link to={`/user/${id}`} key={id} onClick={() => dispatch(selectPrevious(id))} data-userid={id} className="bg-slate-400 w-full rounded-lg" >
                            <UserCard key={id} first={first} last={last} id={id} picture={large}   />
                        </Link>
                        
                    )
                })}
            </div>
        </div>
    </main>
    
  )
}

export default Dashboard;
