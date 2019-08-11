import React from 'react'
import Button, {BUTTON_TYPES, BUTTON_SIZES} from 'components/Button/Button'
import TextInput from 'components/TextInput/TextInput'
import Textarea from 'components/Textarea/Textarea'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './AddInputWithToggle.scss'

const INPUT_ELEMENTS = {
    text: TextInput,
    textarea: Textarea
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
                    <div className='add-input-control'>
                        <InputElement 
                            placeholder={placeholder}
                            value={this.state.value}
                            onChange={this.onChange} 
                        />
                        <div>
                            <Button 
                                type={buttonType} 
                                size={buttonSize} 
                                text={buttonText}
                                onClick={this.onAddValue} 
                            />
                            {
                                hasToggle &&
                                <FontAwesomeIcon 
                                    icon={faTimes} 
                                    className='close-button-toggle' 
                                    onClick={this.toggle} 
                                />
                            }
                        </div>
                    </div>
                    :
                    <div onClick={this.toggle}>
                        {children}
                    </div>
                }
            </>                
        )
    }
}
 
export default AddInputWithToggle;