import styled from 'styled-components/macro'
import CardModalDescription from './CardModalDescription/CardModalDescription'
import CardModalAddComment from './CardModalAddComment/CardModalAddComment'
import CardModalComments from './CardModalComments/CardModalComments'

export const Wrapper = styled.div`
    display: flex;
`

export const InnerWrapper = styled.div`
    flex-grow: 1;
    margin-right: 20px;
`    

export const Description = styled(CardModalDescription)`
    margin-bottom: 25px;
`

export const AddComment = styled(CardModalAddComment)`
    margin-bottom: 25px;
`

export const Comments = styled(CardModalComments)`
    margin-bottom: 25px;
`
