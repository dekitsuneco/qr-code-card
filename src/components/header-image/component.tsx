import React, { CSSProperties, ReactElement } from 'react';
import { Stylesheet, variables } from '../../styles';

const styles: Stylesheet = {
  imgContainer: {
    width: '288px',
    height: '288px',
  },
  img: {
    maxWidth: '100%',
    borderRadius: variables.border.radius,
  },
};

interface HeaderImageStyle {
  container?: CSSProperties;
  img?: CSSProperties;
}

interface HeaderImageProps {
  source: string;
  alt: string;
  style?: HeaderImageStyle;
}

export default function HeaderImage({
  source,
  alt,
  style: customStyles = {},
}: HeaderImageProps): ReactElement {
  return (
    <div 
      style={{
        ...styles.imgContainer,
        ...customStyles?.container,
      }}
    >
    <img 
      src={source} 
      alt={alt} 
      style={{
        ...styles.img,
        ...customStyles?.img,
      }}
    />
  </div>
  );
}
