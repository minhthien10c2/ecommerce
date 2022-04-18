import { Container, Desc_item, Img_item, Item, Items, Item_pd, Title } from "./style/style"
import {FaArrowRight, FaStar } from 'react-icons/fa'

const Product_discount = props => {
    return (
        <Container>
            <Title>
                <h2>Khuyến Mãi Hôm Nay</h2>
                <a href="#" className="more-discount">
                    <span>Khám Phá Thêm Khuyến Mãi</span>
                    <FaArrowRight />
                </a>
            </Title>
            <Items>
                <Item>
                    <Item_pd>
                        <Img_item src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q2GfLzz06FlpitkcYV6uw1e8Lm-AETJm5A&usqp=CAU" alt="item" />
                        <Desc_item>
                            <p className="title">Mascara</p>
                            <a href="#" className="name">Black realistic mascara</a>
                            <div className="price">
                                <strong>1,169.000 <u>đ</u></strong>
                                <strike>1,200.000 <u>đ</u></strike>
                            </div>
                            <div className="star">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </Desc_item>
                    </Item_pd>
                </Item>
                <Item>
                    <Item_pd>
                        <Img_item src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q2GfLzz06FlpitkcYV6uw1e8Lm-AETJm5A&usqp=CAU" alt="item" />
                        <Desc_item>
                            <p className="title">Mascara</p>
                            <a href="#" className="name">Black realistic mascara</a>
                            <div className="price">
                                <strong>1,169.000 <u>đ</u></strong>
                                <strike>1,200.000 <u>đ</u></strike>
                            </div>
                            <div className="star">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </Desc_item>
                    </Item_pd>
                </Item>
                <Item>
                    <Item_pd>
                        <Img_item src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q2GfLzz06FlpitkcYV6uw1e8Lm-AETJm5A&usqp=CAU" alt="item" />
                        <Desc_item>
                            <p className="title">Mascara</p>
                            <a href="#" className="name">Black realistic mascara</a>
                            <div className="price">
                                <strong>1,169.000 <u>đ</u></strong>
                                <strike>1,200.000 <u>đ</u></strike>
                            </div>
                            <div className="star">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </Desc_item>
                    </Item_pd>
                </Item>
                <Item>
                    <Item_pd>
                        <Img_item src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q2GfLzz06FlpitkcYV6uw1e8Lm-AETJm5A&usqp=CAU" alt="item" />
                        <Desc_item>
                            <p className="title">Mascara</p>
                            <a href="#" className="name">Black realistic mascara</a>
                            <div className="price">
                                <strong>1,169.000 <u>đ</u></strong>
                                <strike>1,200.000 <u>đ</u></strike>
                            </div>
                            <div className="star">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </Desc_item>
                    </Item_pd>
                </Item>
                <Item>
                    <Item_pd>
                        <Img_item src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q2GfLzz06FlpitkcYV6uw1e8Lm-AETJm5A&usqp=CAU" alt="item" />
                        <Desc_item>
                            <p className="title">Mascara</p>
                            <a href="#" className="name">Black realistic mascara</a>
                            <div className="price">
                                <strong>1,169.000 <u>đ</u></strong>
                                <strike>1,200.000 <u>đ</u></strike>
                            </div>
                            <div className="star">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </Desc_item>
                    </Item_pd>
                </Item>
            </Items>
        </Container>
    )
}

export default Product_discount