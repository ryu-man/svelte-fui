import { anchor, beige, berry, black, blackAlpha, blue, brass, bronze, brown, burgundy, charcoa, cornflower, cranberry, cyan, darkBlue, darkBrown, darkGreen, darkOrange, darkPurple, darkRed, darkTeal, forest, gold, grape, green, grey, grey10Alpha, grey12Alpha, grey14Alpha, hcButtonFace, hcButtonText, hcCanvas, hcCanvasText, hcDisabled, hcHighlight, hcHighlightText, hcHyperlink, hotPink, lavender, lightBlue, lightGreen, lightTeal, lilac, lime, magenta, marigold, mink, navy, orange, orchid, peach, pink, platinum, plum, pumpkin, purple, red, royalBlue, seafoam, silver, steel, teal, white, whiteAlpha, yellow } from './colors.js'

import { brandOffice, brandTeams, brandWeb } from './colors_brand.js'

import { colorsTheme } from './colors_theme.js'

import { fontFamilies, fontSizes, fontWeights, lineHeights } from './fonts.js'

import { spacings } from './spacing.js'

import { durations } from './duration.js'

import { timingFunctions } from './timingFunctions.js'

import { shadow, shadowBrand } from './shadow.js'

import { typography } from './typography.js'

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,svelte, stories.svelte, ts}'],
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
        ...brandWeb,

        ...colorsTheme
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

export default config
