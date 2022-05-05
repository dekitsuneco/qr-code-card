import React, { CSSProperties, ReactElement } from 'react';
import { Stylesheet, variables } from '../../styles';

interface TextStyle {
  container?: CSSProperties;
  title?: CSSProperties;
}

interface TextProps {
  title: string;
  style?: TextStyle;
}

export default function Text({
  title,
  style: customStyles = {}
}: TextProps): ReactElement {
  return (
    <div 
      style={
        {
          ...styles.container,
          ...customStyles?.container
        }
      }
    >
      <span 
        style={
          {
            ...styles.title,
            ...customStyles?.title
          }
        }
      >
        {title}
      </span>
    </div>
  );
}

const styles: Stylesheet = {
  container: {
    
  },
  title: {
    fontFamily: variables.fontFamily.regular,
    //lineHeight: {},
    //letterSpacing: {},
  },
};