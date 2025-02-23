import { useEffect, useState } from "react"

export const useDebounce = (value , delay) => {

    const [debounceValue , setDebounceValue] = useState(value)

    useEffect(() => {
        const timeOut = setTimeout(() => { 
            setDebounceValue(value)
        }, delay);

        return () => clearTimeout(timeOut) // this function clear's the previous timeout and start a new one when the useEffect dependencies change 
    } , [value , delay])

    return debounceValue

}