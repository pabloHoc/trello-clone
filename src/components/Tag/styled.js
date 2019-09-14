import styled from 'styled-components'

const tagStyles = {
    small: {
        fontSize: '10px',
        borderRadius: '4px',
        padding: '2px 15px',
        margin: '2px 3px 5px 0'
    },
    big: {
        fontSize: '12px',
        borderRadius: '5px',
        padding: '10px',
        margin: '5px 0'    
    }
}

export const TagWrapper = styled.div(({size, color}) => ({
    color: 'white',
    backgroundColor: color,
    fontWeight: 'bold',
    ...tagStyles[size]
}))