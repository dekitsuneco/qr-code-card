import React, { ReactElement } from 'react';
import { Stylesheet, variables } from '../../styles';
import qrCode from '../../images/image-qr-code.png';
import Text from '../text/component';
import HeaderImage from '../header-image/component';

const styles: Stylesheet = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    maxWidth: '320px',
    padding: '15px',
    backgroundColor: variables.color.primary,
    borderRadius: variables.border.radius,
  },
  img: {
    borderRadius: variables.border.radius,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    paddingRight: '15px',
    paddingLeft: '15px',
    paddingBottom: '12px',
  },
  title: {
    color: variables.color.secondaryDark,
    fontSize: variables.fontSize.large,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    color: variables.color.secondary,
    fontSize: variables.fontSize.medium,
    textAlign: 'center',
  },
};

export function Card(): ReactElement {
  const titleText = 'Improve your front-end skills by building projects';
  const contentText = 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level';

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <HeaderImage 
          source={qrCode} 
          alt={'Qr code.'} 
          style={{ img: styles.img }}
        />
      </div>
      <div style={styles.body}>
        <Text 
          title={titleText}
          style={styles.title}
        />
        <Text 
          title={contentText}
          style={styles.content}
        />
      </div>
    </div>
  );
}
