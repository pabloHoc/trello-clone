import React from 'react'
import Button, {BUTTON_TYPES, BUTTON_SIZES} from 'components/Button/Button'
import './AddInputControl.scss'
import TextInput from 'components/TextInput/TextInput'
import Textarea from 'components/Textarea/Textarea'

export const INPUT_ELEMENTS = {
    text: TextInput,
    textarea: Textarea
}

class AddInputWithToggle extends React.Component {
    state = {
        value: ''
    }
    onChange = event => {
        this.setState({ value: event.target.value })
    }
    render(){
        const {
            type = 'text',
            placeholder,
            buttonType = BUTTON_TYPES.PRIMARY,
            buttonSize = BUTTON_SIZES.SHRINK,
            buttonText,
            onAddValue} = this.props
        const InputElement = INPUT_ELEMENTS[type]            
        return(
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
                        onClick={() => onAddValue(this.state.value)} 
                    />
                </div>
            </div>
        )
    }
}
 
export default AddInputWithToggle;