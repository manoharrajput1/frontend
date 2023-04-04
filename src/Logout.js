import React from 'react'
import axios from 'axios'
import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {context} from './App'

const Logout = () => {
    const navigate = useNavigate()
    const {dispatch} = useContext(context);
    const aboutData = async () => {
        const nuser = await axios.get('https://backend-kfwe.vercel.app/logout')
        // console.log(nuser);
        await nuser.data
        dispatch({type:"USER", payload:false})
        navigate('/signin')
    }
    useEffect(() => {
        aboutData()
    }, [])
    return (
        <div>Logout</div>
    )
}

export default Logout