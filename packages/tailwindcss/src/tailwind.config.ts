import { anchor, beige, berry, blackAlpha, blue, brass, bronze, brown, burgundy, charcoa, cornflower, cranberry, cyan, darkBlue, darkBrown, darkGreen, darkOrange, darkPurple, darkRed, darkTeal, forest, gold, grape, green, grey, grey10Alpha, grey12Alpha, grey14Alpha, hcButtonFace, hcButtonText, hcCanvas, hcCanvasText, hcDisabled, hcHighlight, hcHighlightText, hcHyperlink, hotPink, lavender, lightBlue, lightGreen, lightTeal, lilac, lime, magenta, marigold, mink, navy, orange, orchid, peach, pink, platinum, plum, pumpkin, purple, red, royalBlue, seafoam, silver, steel, teal, whiteAlpha, yellow } from '@svelte-fui/theme/src/global/colors'

import { brandOffice, brandTeams, brandWeb } from '@svelte-fui/theme/src/global/brandColors'

import { colorsTheme } from './colors_theme.js'

import { fontFamilies, fontSizes, fontWeights, lineHeights } from '@svelte-fui/theme/src/global/fonts'

import { spacings } from '@svelte-fui/theme/src/global/spacings'

import { durations } from '@svelte-fui/theme/src/global/duration'

import { timingFunctions } from '@svelte-fui/theme/src/global/timingFunctions'

import { shadow, shadowBrand } from '@svelte-fui/theme/src/global/shadow'

import { typography } from './typography.js'

import { tailwindColorify } from './utils/index.js'

/** @type {import('tailwindcss').Config} */
const config = {
  content:[],
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
        hcHyperlink,
        hcHighlight,
        hcDisabled,
        hcCanvas,
        hcCanvasText,
        hcHighlightText,
        hcButtonText,
        hcButtonFace,
        // 
        ...tailwindColorify('grey', grey),
        ...tailwindColorify('white-alpha', whiteAlpha),
        ...tailwindColorify('black-alpha', blackAlpha),
        ...tailwindColorify('grey-10--alpha', grey10Alpha),
        ...tailwindColorify('grey-12--alpha', grey12Alpha),
        ...tailwindColorify('grey-14--alpha', grey14Alpha),
        ...tailwindColorify('dark-red', darkRed),
        ...tailwindColorify('burgundy', burgundy),
        ...tailwindColorify('cranberry', cranberry),
        ...tailwindColorify('red', red),
        ...tailwindColorify('dark-orange', darkOrange),
        ...tailwindColorify('bronze', bronze),
        ...tailwindColorify('pumpkin', pumpkin),
        ...tailwindColorify('orange', orange),
        ...tailwindColorify('peach', peach),
        ...tailwindColorify('marigold', marigold),
        ...tailwindColorify('yellow', yellow),
        ...tailwindColorify('gold', gold),
        ...tailwindColorify('brass', brass),
        ...tailwindColorify('brown', brown),
        ...tailwindColorify('dark-brown', darkBrown),
        ...tailwindColorify('lime', lime),
        ...tailwindColorify('forest', forest),
        ...tailwindColorify('seafoam', seafoam),
        ...tailwindColorify('light-green', lightGreen),
        ...tailwindColorify('green', green),
        ...tailwindColorify('dark-green', darkGreen),
        ...tailwindColorify('light-teal', lightTeal),
        ...tailwindColorify('teal', teal),
        ...tailwindColorify('dark-teal', darkTeal),
        ...tailwindColorify('cyan', cyan),
        ...tailwindColorify('steel', steel),
        ...tailwindColorify('light-blue', lightBlue),
        ...tailwindColorify('blue', blue),
        ...tailwindColorify('royal-blue', royalBlue),
        ...tailwindColorify('dark-blue', darkBlue),
        ...tailwindColorify('cornflower', cornflower),
        ...tailwindColorify('navy', navy),
        ...tailwindColorify('lavender', lavender),
        ...tailwindColorify('purple', purple),
        ...tailwindColorify('dark-purple', darkPurple),
        ...tailwindColorify('orchid', orchid),
        ...tailwindColorify('grape', grape),
        ...tailwindColorify('berry', berry),
        ...tailwindColorify('lilac', lilac),
        ...tailwindColorify('pink', pink),
        ...tailwindColorify('hot-pink', hotPink),
        ...tailwindColorify('magenta', magenta),
        ...tailwindColorify('plum', plum),
        ...tailwindColorify('beige', beige),
        ...tailwindColorify('mink', mink),
        ...tailwindColorify('silver', silver),
        ...tailwindColorify('platinum', platinum),
        ...tailwindColorify('anchor', anchor),
        ...tailwindColorify('charcoa', charcoa),
        // 
        ...tailwindColorify('brand-office', brandOffice),
        ...tailwindColorify('brand-teams', brandTeams),
        ...tailwindColorify('brand-web', brandWeb),

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
