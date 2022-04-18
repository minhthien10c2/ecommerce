import {
  FooterContainer,
  AboutUs,
  FooterContent,
  Copyright,
  FooterTop,
} from "./style/styled";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Header = (props) => {
  return (
    <>
      <FooterContainer>
        <FooterTop>
          <AboutUs>
            <img
              src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-coffee-time-png-image_3626459.jpg"
              alt="https://png.pngtree.com/png-clipart/20190515/original/pngtree-coffee-time-png-image_3626459.jpg"
            />
            <a className="about-us" href="#">
              Về chúng tôi
            </a>
            <a className="blog" href="#">
              Blog
            </a>
            <ul>
              <li>
                <FaFacebookF className="icon-facebook" />
              </li>
              <li>
                <FaInstagram className="icon-instagram" />
              </li>
              <li>
                <FaYoutube className="icon-youtube" />
              </li>
              <li>
                <FaTwitter className="icon-twitter" />
              </li>
            </ul>
          </AboutUs>
          <FooterContent>
            <h3>Dịch vụ khách hàng</h3>
            <ul>
              <li>
                <a href="#">Phương thức thanh toán</a>
              </li>
              <li>
                <a href="#">Đổi trả hàng</a>
              </li>
              <li>
                <a href="#">Phí vận chuyển</a>
              </li>
              <li>
                <a href="#">Các điều khoản và điều kiện</a>
              </li>
            </ul>
          </FooterContent>
          <FooterContent>
            <h3>Tài Khoản</h3>
            <ul>
              <li>
                <a href="#">Đăng ký </a> &nbsp; / &nbsp;
                <a href="#">Đăng nhập </a>
              </li>
              <li>
                <a href="#">Giỏ hàng</a>
              </li>
              <li>
                <a href="#">Yêu thích</a>
              </li>
              <li>
                <a href="#">Tra cứu đơn hàng</a>
              </li>
            </ul>
          </FooterContent>
          <FooterContent>
            <h3>Liên hệ</h3>
            <ul>
              <li>
                <a href="#">theme@gmail.com </a>
              </li>
              <li>
                <a href="#">1234567890 </a>
              </li>
            </ul>
          </FooterContent>
        </FooterTop>
        <Copyright>
          <hr />
          <div className="copyright-container">
            <p>Powered by ...</p>
            <div className="payment">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </Copyright>
      </FooterContainer>
    </>
  );
};

export default Header;
