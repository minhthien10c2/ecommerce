import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Admin = props => {

    const navigate  = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem('access_token')) navigate('/admin-login')
    }, [navigate])

    return (
        <>
            admin
        </>
    )
}

export default Admin