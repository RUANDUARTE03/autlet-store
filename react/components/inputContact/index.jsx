import React, { useState } from 'react'
import { useIntl } from 'react-intl';
import * as S from './styles'

export default function InputContact() {
  const intl = useIntl()
  const [email, setEmail] = useState('')

  /** @todo Add change button to active trigger in MD */

  return (
    <S.ContainerInput>
      <input
        placeholder={intl.formatMessage({ id: 'store/inputContact.placeholder' })}
        value={email}
        onChange={(e) => { setEmail(e.target.value) }}
      />
      <p>OK</p>
    </S.ContainerInput>
  )
}
