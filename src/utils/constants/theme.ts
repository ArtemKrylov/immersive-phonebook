export const theme = {
  colors: {
    white: '#ffffff',
    grey: `#dddddd`,
    darkGrey: '#565656',
    black: '#161616',
    accent: '#ff006e',
  },
  media: {
    tablet: `@media screen and (min-width: 768px)`,
    desktop: `@media screen and (min-width: 1024px)`,
  },
  shadows: {
    fontBlack: `.1px .1px #161616`,
    fontAccent: `1px 1px #ff006e`,
    boxAccent: `0 1px 1px #ff006e, 0 2px 3px #ff004e, 1px 3px 5px #ff005e;`,
    boxDark: `0 1px 1px rgb(0 0 0 / 12%), 0 1px 1px rgb(0 0 0 / 6%), 1px 2px 3px rgb(0 0 0 / 16%);`,
    boxDarkHover: `0 1px 1px rgb(0 0 0 / 12%), 0 2px 2px rgb(0 0 0 / 6%), 1px 3px 4px rgb(0 0 0 / 16%);`,
  },
  cubic: `250ms cubic-bezier(0.4, 0, 0.2, 1)`,
  borderRadius: '5px',
  visuallyHidden: `position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0 0 0 0);`,
  flexCenterAndGap: (gap = 0) =>
    `display:flex; align-items: center: justify-content: center; gap:${gap}px;`,
  flexCenter: `display:flex; align-items: center: justify-content: center;`,
  textInherit: `font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;`,
  text: (fs:number, lh:number, ls:number) => `font-size: ${fs}px;
  line-height: calc(${lh}px / ${fs}px);
  letter-spacing: ${ls}px;`,
} as const;
