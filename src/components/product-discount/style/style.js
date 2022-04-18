import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;

    @media (min-width: 1200px){
        width: 1150px;
        max-width: 1150px;
    }

    @media (max-width: 1199.98px){
        padding: 0px 50px;
    }
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    h2{
        letter-spacing: 0.4px;
        color: #2A363B;
        font-size: 20px;
        margin: 0;
    }

    .more-discount{
        letter-spacing: 0px;
        color: #5D3FD3;
        font-size: 14px;
        display: flex;
        align-items: center;
        text-decoration: none;

        &:hover{
            color: #5D3FD3;
            text-decoration: none;
            opacity: .8;
        }

        span{
            margin-right: 5px;
        }
    }
`

export const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -7px;
    margin-right: -7px;
`

export const Item = styled.div`
    width: 20%;

    @media (min-width: 768px) and (max-width: 991.98px){
        width: 33.33333%;
    }

    @media (max-width: 767.98px){
        width: 50%;
    }
`

export const Item_pd = styled.div`
    padding-left: 7px;
    padding-right: 7px;
    display: flex;
    flex-direction: column;
    position: relative;
`

export const Img_item = styled.img`
    width: 100%;
    height: 230px;
    object-fit: cover;
`

export const Desc_item = styled.div`
    padding: 16px;

    .title{
        letter-spacing: 0px;
        color: #999999;
        font-size: 14px;
        margin-bottom: 2px;
        display: block;
        margin: 0;
    }

    .name{
        letter-spacing: 0px;
        color: #2A363B;
        font-size: 14px;
        text-decoration: none;
        margin-bottom: 2px;
        font-weight: bold;
        display: block;

        &:hover{
            color: #2A363B;
            opacity: .8;
        }
    }

    .price{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 29px;

        strong{
            letter-spacing: 0px;
            color: #5D3FD3;
            font-size: 14px;
        }

        strike{
            letter-spacing: 0px;
            color: #999999;
            font-size: 14px;
        }
    }

    .star{
        display: flex;
    }
`