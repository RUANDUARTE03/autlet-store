import React from 'react';
import { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import * as S from './styles'

export default function RichTextCustom(props) {
  const { text, color, size, tagHTML } = props;

  return (
    <S.RichText
      color={color}
      size={size}
    >
      <FormattedMessage id={text} />
    </S.RichText>
  )
}

RichTextCustom.schema = {
  title: 'admin/richtextcustom.schema.title',
  type: 'object',
  properties: {
    text: {
      title: 'admin/richtextcustom.schema.properties.text.title',
      type: 'string',
      default: '',
    },
    size: {
      title: 'admin/richtextcustom.schema.properties.size.title',
      description: 'admin/richtextcustom.schema.properties.size.description',
      type: 'string',
      default: '',
    },
    tagHTML: {
      title: 'admin/richtextcustom.schema.properties.tagHTML.title',
      description: 'admin/richtextcustom.schema.properties.tagHTML.description',
      type: 'string',
      default: 'p',
    },
    color: {
      title: 'admin/richtextcustom.schema.properties.color.title',
      type: 'string',
      default: '#D33F33',
    },
  },
};
