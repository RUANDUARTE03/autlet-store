import styled from 'styled-components'

export const RichText = styled.p`
  font-size: ${props => props.size || '16px'};
  font-weight: ${props => props.weight || '400'};
  color: ${props => props.color || '#D33F33'};
  margin: ${props => props.margin || '16px'};
  text-transform: ${props => props.textTransform || 'none'};
`