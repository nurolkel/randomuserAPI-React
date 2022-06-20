// import { useContext } from 'react';
// import UserCard from './components/userCards';
// import useFetchUsers from './hooks/useFetchUsers';
// import SearchBar from './components/searchBar';
// import useSearch from './hooks/useSearch';
// import usePrevious from './hooks/usePrevious';
// import { Link } from 'react-router-dom';
// import { DataContext } from './context/DataContext';

// function App() {

  

//   // const { users } = useFetchUsers();
//   // const { searchTerm, setSearchTerm, value, setValue } = useSearch();
//   // const { prev, handlePrev } = usePrevious(users);

//   const {users, searchTerm, setSearchTerm, value, setValue, prev, handlePrev } = useContext(DataContext)


//   return (
//     <DataContext.Consumer>
//     <main className="bg-slate-200 min-h-screen  box-border">
//       <h1 className="text-red-500">hello</h1>
//       <div className="flex flex-col items-center gap-6">
//       <SearchBar setSearchTerm={setSearchTerm} value={value} setValue={setValue} />
//       <div className="p-3 w-50">
//         {prev && prev.map(element => {
//           const { name:{first, last}, picture:{large}, id } = element;
//               return (     
//                   <UserCard key={id} first={first} last={last} picture={large} id={id} cb={handlePrev}  />
//               )
//         })}
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-3">
//         {users && users.filter(elements => {
//           if (!searchTerm) {
            
//             return elements
          
//           } else if (searchTerm) {
            
//             if ((elements.name.first.toLowerCase().includes(searchTerm.toLowerCase()) || elements.name.last.toLowerCase().includes(searchTerm.toLowerCase()))) {
//               return elements;
//             }
//           }
//         }).map(values => {
//             const { name:{first, last}, picture:{large}, id } = values;
//             return (
//               <Link to={`${id}`} key={id} onClick={handlePrev} data-userid={id} >    
//                 <UserCard key={id} first={first} last={last} picture={large}   />
//               </Link>
//             )
//         })}
        
//         </div>
//       </div>
      
//     </main>
//     </DataContext.Consumer>
//   )
// }

// export default App;
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { DataProvider} from './context/DataContext';
import Layout from './components/layout';

const APP =() => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/:id" element={<Profile  />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </DataProvider>
  )
}

export default APP
