import { useState } from 'react';


export const useModal = () => {
    const [isopen, setisopen] = useState(false);
    const openModal=()=>setisopen(true);
    const closeModal=()=>setisopen(false);
    return [isopen, openModal, closeModal];

}

export default useModal;
