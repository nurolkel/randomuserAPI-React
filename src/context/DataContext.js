import { createContext } from "react";
import useFetchUsers from "../hooks/useFetchUsers";
import useSearch from "../hooks/useSearch";
import usePrevious from "../hooks/usePrevious";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    
    const { users } = useFetchUsers();
    const { searchTerm, setSearchTerm, value, setValue } = useSearch();
    const { prev, handlePrev } = usePrevious(users);

    return (
        <DataContext.Provider value={{
            users,
            searchTerm,
            setSearchTerm,
            value,
            setValue,
            prev,
            handlePrev
        }}>
            {children}
        </DataContext.Provider>
    )
}