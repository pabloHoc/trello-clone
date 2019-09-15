import React from 'react'
import { faStickyNote } from '@fortawesome/free-regular-svg-icons'
import Modal from 'components/molecules/Modal/Modal'
import EditCardModalActions from './CardModalActions/CardModalActions'
import TitleWithIcon, { TITLE_SIZE } from 'components/atoms/TitleWithIcon/TitleWithIcon'
import { Wrapper, InnerWrapper, Description, AddComment, Comments } from './styled'

const CardModal = ({
    onClose,
    description,
    comments,
    onEditDescription,
    onAddComment}) => (
    <Modal onClose={onClose}>
        <TitleWithIcon icon={faStickyNote} title='Titulo' size={TITLE_SIZE.BIG} />
        <Wrapper>
            <InnerWrapper>
                <Description 
                    description={description}
                    onEditDescription={onEditDescription}
                />
                <AddComment onAddComment={onAddComment}/>
                <Comments comments={comments} />
            </InnerWrapper>
            <EditCardModalActions />
        </Wrapper>
    </Modal>
)

export default CardModal