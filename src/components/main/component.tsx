import React, { ReactElement } from 'react';
import { Stylesheet } from '../../styles';

const styles: Stylesheet = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1 1 auto',
    minWidth: '100vw',
  },
};

interface MainProps {
  children: ReactElement;
}

export function Main({
  children,
}: MainProps): ReactElement {
  return (
    <div style={styles.main}>
      {children}
    </div>
  );
}
