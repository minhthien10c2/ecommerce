import { Link } from "react-router-dom"
import { Btn, BtnLogin, Form, Input, Title, TitleInput } from "./style/style"

const Login = props => {
    return (
        <Form>
            <Title>Login</Title>
            <TitleInput>Tài khoản</TitleInput>
            <Input placeholder="vui lòng nhập tài khoản ..." />
            <TitleInput>Mật khẩu</TitleInput>
            <Input placeholder="vui lòng nhập mật khẩu ..." />
            <Btn>
                <BtnLogin>Đăng nhập</BtnLogin>
                <Link className="BtnRegister" to={'/admin-register'}>Đăng kí</Link>
            </Btn>
        </Form>
    )
}

export default Login