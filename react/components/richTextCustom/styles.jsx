import styled from 'styled-components'

export const RichText = styled.p`
  font-size: ${props => props.size || '16px'};
  font-weight: ${props => props.weight || '400'};
  color: ${props => props.color || '#D33F33'};
  margin: ${props => props.margin || '16px'};
  text-align: ${props => props.textAlign};
  text-transform: ${props => props.textTransform || 'none'};
  -webkit-text-stroke-width: ${props => props.colorBorder ? '3px' : '0px'};
  -webkit-text-stroke-color: ${props => props.colorBorder};
`