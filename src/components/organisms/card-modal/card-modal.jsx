import React from 'react'
import { faStickyNote } from '@fortawesome/free-regular-svg-icons'
import Modal from 'components/molecules/modal/modal'
import EditCardModalActions from './actions'
import IconTitle, { TITLE_SIZE } from 'components/atoms/icon-title/icon-title'
import * as S from './card-modal.styled'

const CardModal = ({
    onClose,
    description,
    comments,
    onEditDescription,
    onAddComment}) => (
    <Modal onClose={onClose}>
        <IconTitle icon={faStickyNote} title='Titulo' size={TITLE_SIZE.BIG} />
        <S.Wrapper>
            <S.InnerWrapper>
                <S.Description 
                    description={description}
                    onEditDescription={onEditDescription}
                />
                <S.AddComment onAddComment={onAddComment}/>
                <S.Comments comments={comments} />
            </S.InnerWrapper>
            <EditCardModalActions />
        </S.Wrapper>
    </Modal>
)

export default CardModal