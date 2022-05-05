const baseFontSize = 15;

export const variables = {
  color: {
    primary: ' hsl(0, 0%, 100%)',
    primaryDark: 'hsl(212, 45%, 89%)',
    secondary: ' hsl(220, 15%, 55%)',
    secondaryDark: 'hsl(218, 44%, 22%)',
  },
  fontSize: {
    large: `${baseFontSize * 1.45}px`,
    medium: `${baseFontSize}px`,
    small: `${baseFontSize * .73}px`,
  },
  fontFamily: {
    regular: 'Outfit',
  },
  border: {
    radius: '15px',
  },
  breakpoints: {
    desktop: '1440px',
    mobile: '375px',
  },
};