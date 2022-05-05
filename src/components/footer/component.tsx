import React, { ReactElement } from 'react';
import { Stylesheet, variables } from '../../styles';

const style: Stylesheet = {
  footer: {
    minWidth: '100vw',
    paddingTop: '7px',
    paddingBottom: '7px',
    backgroundColor: variables.color.primaryDark,
    color: variables.color.secondaryDark,
    fontSize: variables.fontSize.small,
    textAlign: 'center',
  },
  footerLink: {
    color: variables.color.secondary,
  },
};

export const Footer = (): ReactElement => (
  <div style={style.footer}>
    Challenge by <a 
      style={style.footerLink} 
      href="https://www.frontendmentor.io?ref=challenge" 
      target="_blank" 
      rel="noreferrer"
    >
        Frontend Mentor
      </a>. 
    Coded by <a 
      style={style.footerLink} 
      href="https://github.com/dekitsuneco/"
    >
      dekitsuneco
    </a>.
  </div>
);
