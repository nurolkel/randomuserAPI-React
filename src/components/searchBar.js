import { useRef, useEffect } from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(()=> {
            setSearchTerm(searchTerm);
        },300)

        return () => clearTimeout(timer);
    },[searchTerm, setSearchTerm])

    return (
        <div className="flex flex-row gap-3 justify-evenly p-5 my-3 bg-indigo-500 items-center">
            <label htmlFor="searchBar" className="text-xl text-white md:text-2xl lg:text-4xl">Search Users</label>
            <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-black rounded-full p-4 w-6/12 text-xl"
            />
        </div>
    )
}

export default SearchBar