import styled from 'styled-components/macro'

export const Wrapper = styled.nav`
    height: 40px;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px 0 10px;
    position: fixed;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 99;
`

export const FlexWrapper = styled.div`
    display: flex;
`