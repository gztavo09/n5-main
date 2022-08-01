import styled from 'styled-components'

const LngButton = styled.button`
    background: transparent;
    color: #fff;
    padding: 0px 15px;
    text-transform: uppercase;
    position: relative;
    top: 2px;
    cursor: pointer;
    font-weight: bold;
    &:last-child {
        border-left: 1px solid #fff;
    }
`

export default LngButton;