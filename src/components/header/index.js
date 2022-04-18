import { Config, Container, HeaderTop, Phone } from "./style/styled"
import { FaPhone, FaUser, FaCaretDown } from 'react-icons/fa'

const Header = props => {
    return (
        <>
            <HeaderTop>
                <Container>
                    <Phone>
                        <FaPhone />
                        Hotline: 0123456789
                    </Phone>

                    <Config>
                        <div className="user">
                            <FaUser className="icon-user" />
                            <a href="#">
                                Đăng nhập
                            </a>
                            &nbsp; / &nbsp;
                            <a href="#">
                                Đăng kí
                            </a>
                        </div>
                        <div className="user language">
                            <a href="#">
                                Tiếng Việt
                                <FaCaretDown className="caret-down"/>
                            </a>
                        </div>
                        <div className="user currency">
                            <a href="#">
                                VND
                                <FaCaretDown className="caret-down"/>
                            </a>
                        </div>
                    </Config>
                </Container>
            </HeaderTop>
        </>
    )
}

export default Header