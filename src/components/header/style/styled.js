import styled from 'styled-components'

export const HeaderTop = styled.div`
    height: 40px;
    background: #364146 0% 0% no-repeat padding-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 1200px) {
        padding: 0px 150px;
    }
`

export const Phone = styled.p`
    font-size: 14px;
    color: white;

    svg{
        margin-right: 5px;
    }
`

export const Config = styled.div`
    display: flex;

    .user{
        font-size: 14px;
        color: white;
        display: flex;
        align-items: center;

        & + .user{
            margin-left: 20px;
        }

        .icon-user{
            margin-right: 5px;
            color: white;
        }

        a{
            text-decoration: none;
            color: white;
            display: flex;
            align-items: center;
    
            &:hover{
                color: white;
                text-decoration: none;
            }

            .caret-down{
                margin-left: 5px;
            }
        }
    }
`