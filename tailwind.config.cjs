const { anchor, beige, berry, black, blackAlpha, blue, brass, bronze, brown, burgundy, charcoa, cornflower, cranberry, cyan, darkBlue, darkBrown, darkGreen, darkOrange, darkPurple, darkRed, darkTeal, forest, gold, grape, green, grey, grey10Alpha, grey12Alpha, grey14Alpha, hcButtonFace, hcButtonText, hcCanvas, hcCanvasText, hcDisabled, hcHighlight, hcHighlightText, hcHyperlinkm, hcHyperlink, hotPink, lavender, lightBlue, lightGreen, lightTeal, lilac, lime, magenta, marigold, mink, navy, orange, orchid, peach, pink, platinum, plum, pumpkin, purple, red, royalBlue, seafoam, silver, steel, teal, white, whiteAlpha, yellow } = require('./colors.cjs')

const { brandOffice, brandTeams, brandWeb } = require('./colors_brand.cjs')

const { fontFamilies, fontSizes, fontWeights, lineHeights } = require('./fonts.cjs')

const { spacings } = require('./spacing.cjs')

const { durations } = require('./duration.cjs')

const { timingFunctions } = require('./timingFunctions.cjs')

const { shadow, shadowBrand } = require('./shadow.cjs')

const { typography } = require('./typography.cjs')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte, stories.svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        ...fontFamilies
      },
      fontSize: {
        ...fontSizes
      },
      fontWeight: {
        ...fontWeights
      },
      lineHeight: {
        ...lineHeights
      },
      spacing: {
        ...spacings
      },
      borderRadius: {
        'none': '0px',
        'sm': '2px',
        'md': '4px',
        'lg': '6px',
        'xl': '8px',
      },
      borderWidth: {
        thin: '1px',
        thick: '2px',
        thicker: '3px',
        thickest: '4px'
      },
      boxShadow: {
        ...shadow,
        ...shadowBrand,
      },
      colors: {
        background: 'whitesmoke',
        hcHyperlink,
        hcHighlight,
        hcHyperlinkm,
        hcDisabled,
        hcCanvas,
        hcCanvasText,
        hcHighlightText,
        hcButtonText,
        hcButtonFace,
        // 
        ...grey,
        ...whiteAlpha,
        ...blackAlpha,
        ...grey10Alpha,
        ...grey12Alpha,
        ...grey14Alpha,
        ...darkRed,
        ...burgundy,
        ...cranberry,
        ...red,
        ...darkOrange,
        ...bronze,
        ...pumpkin,
        ...orange,
        ...peach,
        ...marigold,
        ...yellow,
        ...gold,
        ...brass,
        ...brown,
        ...darkBrown,
        ...lime,
        ...forest,
        ...seafoam,
        ...lightGreen,
        ...green,
        ...darkGreen,
        ...lightTeal,
        ...teal,
        ...darkTeal,
        ...cyan,
        ...steel,
        ...lightBlue,
        ...blue,
        ...royalBlue,
        ...darkBlue,
        ...cornflower,
        ...navy,
        ...lavender,
        ...purple,
        ...darkPurple,
        ...orchid,
        ...grape,
        ...berry,
        ...lilac,
        ...pink,
        ...hotPink,
        ...magenta,
        ...plum,
        ...beige,
        ...mink,
        ...silver,
        ...platinum,
        ...anchor,
        ...charcoa,
        // 
        ...brandOffice,
        ...brandTeams,
        ...brandWeb
      },
      transitionDuration: durations,
      transitionDelay: timingFunctions,
      transitionTimingFunction: timingFunctions
    },
  },
  plugins: [
    typography
  ],
}
