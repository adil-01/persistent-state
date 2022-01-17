import { useEffect, useState } from 'react'

const usePersistClient = (key, defVal) => {
    const[state, setState] = useState(
        () => typeof window !== "undefined" && localStorage.getItem(key) ? 
        JSON.parse(localStorage.getItem(key)) : 
        defVal
    );

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState];
}

// Set browser cookie
function setCookie(cookieName, cookieVal, duration){
    // add duration in minutes
    let date = new Date() 
    date.setTime(date.getTime() + duration*60*1000)
    if (typeof cookieVal !== 'string'){
        cookieVal = JSON.stringify(cookieVal)
    }
    document.cookie = cookieName + "=" + cookieVal + "; expires = " + date.toUTCString();
}

// Get browser cookie
function getCookie(name, defVal){
    let cookie = {}
    if (typeof document !== 'undefined'){
        document.cookie.split(';').forEach(ele => {
            let [k, v] = ele.split('=')
            cookie[k.trim()] = v;
        })
    }
    return cookie[name] ? JSON.parse(cookie[name]) : defVal;
}

const usePersistServer = (key, defVal, expiry) => {
    const[state, setState] = useState(
        () => getCookie(key, defVal) ? getCookie(key, defVal) : defVal
    );

    useEffect(() => {
        setCookie(key, state, expiry)
    }, [key, state])

    return [state, setState];
}


export { usePersistServer, usePersistClient };
