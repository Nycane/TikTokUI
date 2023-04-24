import { useEffect, useState } from "react";

function useDebounce(value,delay,setLoading) {
    const [debounce,setDebounce]=useState(value)
    useEffect(()=>{
        console.log("useEffect")
                let idTimeout=setTimeout(()=>{
                        setDebounce(value)
                },delay)
                return ()=>{
                    console.log("clear time out")
                    clearTimeout(idTimeout) 
                }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[value])
    console.log("Debounce")
    return debounce;
}

export default useDebounce;