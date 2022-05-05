const baseFontSize = 15;

export const variables = {
  color: {
    primary: ' hsl(0, 0%, 100%)',
    primaryDark: 'hsl(212, 45%, 89%)',
    secondary: ' hsl(220, 15%, 55%)',
    secondaryDark: 'hsl(218, 44%, 22%)',
  },
  fontSize: {
    medium: `${baseFontSize}px`,
    small: `${baseFontSize * .75}px`,
    smaller: `${baseFontSize * .5}px`,
  },
  fontFamily: {
    regular: 'Outfit',
  },
  breakpoints: {
    desktop: '1440px',
    mobile: '375px',
  },
};