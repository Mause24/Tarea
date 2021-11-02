import { useState } from "react"



export const useLocalStorage = (key:string, initialValue?:string)=>{
    const [storedValue, setstoredValue]= useState(()=>{
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item): initialValue
        } catch (error) {   
            return initialValue
        }
    });

    const setValue = (value:any) =>{
        try {
            setstoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    }
    return [storedValue, setValue];
}