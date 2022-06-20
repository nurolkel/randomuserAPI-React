import { useState } from "react";

const useSearch = () => {
    
    const [value, setValue] = useState('');

    const [searchTerm, setSearchTerm] = useState('');

   

    return {
        searchTerm,
        setSearchTerm,
        value,
        setValue
    }
}

export default useSearch;