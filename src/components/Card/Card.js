import React from 'react'
import TagList from 'components/Lists/TagList/TagList'
import {TAG_SIZES} from 'components/Tag/Tag'
import CardModal from 'components/Modals/CardModal/CardModal'
import Comment from 'models/Comment'
import './Card.scss'

class Card extends React.Component {
    state = {
        modalOpen: false,
        description: '',
        comments: []
    }
    openModal = () => {
        this.setState({ modalOpen: true })
    }
    closeModal = () => {
        this.setState({ modalOpen: false })
    }
    editDescription = description => {
        this.setState({ description: description })
    }
    addComment = comment => {
        this.setState({ comments: [...this.state.comments, new Comment(comment)]})
    }
    render(){
        const {tags, title} = this.props
        return(
            <>
                <div className='card' onClick={this.openModal}>
                    <div className='tags'>
                        <TagList tags={tags} size={TAG_SIZES.SMALL} />
                    </div>
                    <p>{title}</p>
                </div>
                {
                    this.state.modalOpen &&
                    <CardModal 
                        description={this.state.description}
                        comments={this.state.comments}
                        onClose={this.closeModal}
                        onEditDescription={this.editDescription}
                        onAddComment={this.addComment}
                    />
                }
            </>                    
        )
    }
}
 
export default Card