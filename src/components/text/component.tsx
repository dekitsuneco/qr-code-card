import React, { CSSProperties, ReactElement } from 'react';
import { Stylesheet, variables } from '../../styles';

const styles: Stylesheet = {
  title: {
    fontFamily: variables.fontFamily.regular,
  },
};

interface TextProps {
  title: string;
  style?: CSSProperties;
}

export default function Text({
  title,
  style: customStyles = {},
}: TextProps): ReactElement {
  return (
    <p 
      style={{
        ...styles.title,
        ...customStyles,
      }}
    >
      {title}
    </p>
  );
}
