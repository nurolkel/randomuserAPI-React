import { useState, useEffect } from 'react'

const useNavBar = () => {
    const [open, setOpen] = useState(false);
    
    const toggleNavBar = () => setOpen(open => !open);

    

   

    useEffect(() => {
        if (window.innerWidth > 1024) {
            setOpen(false);
        }

    },[open])

    useEffect(() => {
        function handleClickOutside(e) {
            if (open && window.innerWidth >= 1024) {
                setOpen(false);
            }
          }
          
        document.addEventListener('click', handleClickOutside);

        return () => {
           document.removeEventListener('click', handleClickOutside);
          };
    },[open])


    return {
        open,
        setOpen,
        toggleNavBar
    }
}

export default useNavBar;