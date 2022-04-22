import { useState } from "react"
import { Link } from "react-router-dom"
import { Btn, BtnLogin, Form, Input, Title, TitleInput } from "./style/style"

const Login = props => {

    const [user, setUser] = useState({
        userName: '',
        passWord: ''
    })

    const submitForm = e => {
        e.preventDefault()
        
    }

    const onchangeUser = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Form onSubmit={submitForm}>
            <Title>Login</Title>
            <TitleInput>Tài khoản</TitleInput>
            <Input name="userName" value={user.userName} onChange={e => onchangeUser(e)} required placeholder="vui lòng nhập tài khoản ..." />
            <TitleInput>Mật khẩu</TitleInput>
            <Input name="passWord" value={user.passWord} onChange={e => onchangeUser(e)} type='password' required placeholder="vui lòng nhập mật khẩu ..." />
            <Btn>
                <BtnLogin type="submit">Đăng nhập</BtnLogin>
                <Link className="BtnRegister" to={'/admin-register'}>Đăng kí</Link>
            </Btn>
        </Form>
    )
}

export default Login