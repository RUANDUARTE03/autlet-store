import React from 'react'
import * as S from './styles'
import { useIntl } from 'react-intl';

export default function Login() {
  const intl = useIntl()
  /**@todo Add click in login vtex */

  return (
    <S.ContainerLogin id="new-login">
      <S.TitleLogin>
        Login
      </S.TitleLogin>
      <p>{intl.formatMessage({ id: 'store/login.subtitle' })}</p>
    </S.ContainerLogin>
  )
}
