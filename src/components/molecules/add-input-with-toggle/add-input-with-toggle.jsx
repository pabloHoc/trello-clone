import React from 'react'
import Button from 'components/atoms/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import * as S from './add-input-with-toggle.styled'

const INPUT_ELEMENTS = {
    text: S.TextInput,
    textarea: S.Textarea
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
            buttonType,
            buttonSize,
            buttonText,
            children,
            hasToggle = true} = this.props
        const InputElement = INPUT_ELEMENTS[type]            
        return(
            <S.Wrapper>
                {
                    this.state.toggle || !hasToggle?
                    <S.Wrapper>
                        <InputElement 
                            placeholder={placeholder}
                            value={this.state.value}
                            onChange={this.onChange} 
                        />
                        <S.FlexWrapper>
                            <Button primary onClick={this.onAddValue} 
                            >
                                {buttonText}
                            </Button>
                            {
                                hasToggle &&
                                <S.IconWrapper>
                                    <FontAwesomeIcon 
                                        icon={faTimes} 
                                        onClick={this.toggle} 
                                    />
                                </S.IconWrapper>
                            }
                        </S.FlexWrapper>
                    </S.Wrapper>
                    :
                    <S.Wrapper onClick={this.toggle}>
                        {children}
                    </S.Wrapper>
                }
            </S.Wrapper>                
        )
    }
}
 
export default AddInputWithToggle