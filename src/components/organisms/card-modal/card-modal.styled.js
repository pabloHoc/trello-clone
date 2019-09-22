import styled from 'styled-components/macro'
import CardModalDescription from './description'
import CardModalAddComment from './add-comment'
import CardModalComments from './comments'

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
