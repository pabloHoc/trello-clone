import React from 'react'
import Button, {BUTTON_TYPES, BUTTON_SIZES} from 'components/Button/Button'
import Textarea from 'components/Textarea/Textarea'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import * as Styled from './styled'

const INPUT_ELEMENTS = {
    text: Styled.StyledTextInput,
    textarea: Styled.StyledTextarea
}

class AddInputWithToggle extends React.Component {
    state = {
        value: '',
        toggle: false
    }
    onChange = event => {
        this.setState({ value: event.target.value })
    }
    toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    onAddValue = () => {
        this.setState({ value: '', toggle: false })
        this.props.onAddValue(this.state.value)
    }
    render(){
        const {
            type = 'text',
            placeholder,
            buttonType = BUTTON_TYPES.PRIMARY,
            buttonSize = BUTTON_SIZES.SHRINK,
            buttonText,
            children,
            hasToggle = true} = this.props
        const InputElement = INPUT_ELEMENTS[type]            
        return(
            <>
                {
                    this.state.toggle || !hasToggle?
                    <Styled.Wrapper>
                        <InputElement 
                            placeholder={placeholder}
                            value={this.state.value}
                            onChange={this.onChange} 
                        />
                        <Styled.FlexWrapper>
                            <Button 
                                type={buttonType} 
                                size={buttonSize} 
                                text={buttonText}
                                onClick={this.onAddValue} 
                            />
                            {
                                hasToggle &&
                                <Styled.IconWrapper>
                                    <FontAwesomeIcon 
                                        icon={faTimes} 
                                        onClick={this.toggle} 
                                    />
                                </Styled.IconWrapper>
                            }
                        </Styled.FlexWrapper>
                    </Styled.Wrapper>
                    :
                    <Styled.Wrapper onClick={this.toggle}>
                        {children}
                    </Styled.Wrapper>
                }
            </>                
        )
    }
}
 
export default AddInputWithToggle;