import React from 'react'
import { faList } from '@fortawesome/free-solid-svg-icons'
import TitleWithIcon, { TITLE_SIZE } from 'components/atoms/icon-title/icon-title'
import CommentList from 'components/molecules/comment/comment-list'
import * as S from './comments.styled'

const CardModalComments = ({comments, className}) => (
    <S.Wrapper className={className}>
        <TitleWithIcon 
            icon={faList} 
            title='Actividad' 
            size={TITLE_SIZE.MEDIUM} />
        <CommentList comments={comments} />
    </S.Wrapper>
)

export default CardModalComments