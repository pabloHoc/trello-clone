import React from 'react'
import { faList } from '@fortawesome/free-solid-svg-icons'
import TitleWithIcon, { TITLE_SIZE } from 'components/atoms/TitleWithIcon/TitleWithIcon'
import CommentList from 'components/molecules/Comment/CommentList'
import withWrapper from 'helpers/withWrapper'

const CardModalComments = ({comments}) => (
    <>
    <TitleWithIcon 
        icon={faList} 
        title='Actividad' 
        size={TITLE_SIZE.MEDIUM} />
    <CommentList comments={comments} />
    </>
)

export default withWrapper(CardModalComments)