import styled from 'styled-components'

export const RichText = styled.p`
  font-size: ${props => props.size || '16px'};
  font-weight: 400;
  color: ${props => props.color || '#D33F33'};
`