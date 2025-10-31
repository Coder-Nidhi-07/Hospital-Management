import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AdminContext= createContext()

const AdminContextProvider=(props)=>{

    const [adminToken, setAdminToken]=useState(localStorage.getItem('adminToken')? localStorage.getItem('adminToken') : "")
    const [doctors, setDoctors]=useState([])
    const [appointments, setAppointments]=useState([])
    const [dashData, setDashData]=useState(false)

    // const backendUrl = 
    const backendUrl = import.meta.env.VITE_BACKEND_URL ||"https://prescripto-backend-9mln.onrender.com"

    const getAllDoctors=async () =>{

        try {
            
            // getting data from api response
            const {data}=await axios.post(backendUrl + '/api/admin/all-doctors', {}, {headers:{atoken:adminToken}})

            if(data.success){
                setDoctors(data.doctors)
                console.log(data.doctors);
                
            }else{
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    const changeAvailability=async (docId)=>{

        try {

            const {data}=await axios.post(backendUrl + '/api/admin/change-availability', {docId}, {headers:{atoken:adminToken}})
            // const { data } = await axios.post('http://localhost:4000/api/admin/change-availability', { docId }, { headers: { atoken: adminToken } })


            if(data.success){
                toast.success(data.message)
                getAllDoctors()
            }else{
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }

    }

    const getrAllAppointments=async () =>{
        try {

            const {data}=await axios.get(backendUrl + '/api/admin/appointments', {headers:{atoken: adminToken}})

            if(data.success){
                setAppointments(data.appointments)
                console.log(data.appointments)
            }else{
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
            
        }
    }

    const cancelAppointment=async (appointmentId)=>{

        try {

            const {data}= await axios.post(backendUrl + '/api/admin/cancel-appointment', {appointmentId}, {headers:{atoken: adminToken}})

            if(data.success){
                toast.success(data.message)
                getrAllAppointments()
            }else{
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }

    }

    // function to get dashboard data from api
    const getDashData=async ()=>{
        try {

            const {data}=await axios.get(backendUrl + '/api/admin/dashboard', {headers:{atoken: adminToken}})

            if(data.success){
                setDashData(data.dashData)
                console.log(data.dashData)
            }else{
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }
 
    const value={
        adminToken, setAdminToken,
        backendUrl, doctors, getAllDoctors,
        changeAvailability,
        appointments, setAppointments, getrAllAppointments,
        cancelAppointment,
        dashData, getDashData
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider