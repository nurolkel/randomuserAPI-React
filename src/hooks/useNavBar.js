import { useState, useEffect } from 'react'

const useNavBar = () => {
    const [open, setOpen] = useState(false);
    
    const toggleNavBar = () => setOpen(open => !open);

    useEffect(() => {
        if (window.innerWidth > 1024) {
            setOpen(false);
        }

    },[open])

    return {
        open,
        setOpen,
        toggleNavBar
    }
}

export default useNavBar;