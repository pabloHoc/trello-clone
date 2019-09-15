import React from 'react'
import styled from 'styled-components/macro'

export const Wrapper = styled.div``

const withWrapper = Component => props => (
    <Wrapper className={props.className}>
        <Component {...props} />
    </Wrapper>
)        

export default withWrapper