import React from 'react'
import * as Styled from './styled'

const Textarea = ({placeholder, value, onChange}) => (
    <Styled.Textarea 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />        
)

export default Textarea