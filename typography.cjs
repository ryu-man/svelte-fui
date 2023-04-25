const plugin = require('tailwindcss/plugin')

exports.typography = plugin(function ({ addComponents, theme }) {
    //  body
    addComponents({
        '.body-1': {
            fontFamily: theme('fontFamily.base'),
            fontWeight: theme('fontWeight.regular'),
            fontSize: theme('fontSize.base-300'),
            lineHeight: theme('lineHeight.base-300')
        },
        '.body-1-strong': {
            fontFamily: theme('fontFamily.base'),
            fontWeight: theme('fontWeight.semibold'),
            fontSize: theme('fontSize.base-300'),
            lineHeight: theme('lineHeight.base-300')
        },
        '.body-1-stronger': {
            fontFamily: theme('fontFamily.base'),
            fontWeight: theme('fontWeight.bold'),
            fontSize: theme('fontSize.base-300'),
            lineHeight: theme('lineHeight.base-300')
        },
        '.body-2': {
            fontFamily: theme('fontFamily.base'),
            fontWeight: theme('fontWeight.regular'),
            fontSize: theme('fontSize.base-400'),
            lineHeight: theme('lineHeight.base-400')
        }
    })

    // caption
    addComponents({
        '.caption-1': {
            fontFamily: theme('fontFamily.base'),
            fontWeight: theme('fontWeight.regular'),
            fontSize: theme('fontSize.base-200'),
            lineHeight: theme('lineHeight.base-200')
        },
        '.caption-1-strong': {
            fontFamily: theme('fontFamily.base'),
            fontWeight: theme('fontWeight.semibold'),
            fontSize: theme('fontSize.base-200'),
            lineHeight: theme('lineHeight.base-200')
        },
        '.caption-1-stronger': {
            fontFamily: theme('fontFamily.base'),
            fontWeight: theme('fontWeight.bold'),
            fontSize: theme('fontSize.base-200'),
            lineHeight: theme('lineHeight.base-200')
        },
        '.caption-2': {
            fontFamily: theme('fontFamily.base'),
            fontWeight: theme('fontWeight.regular'),
            fontSize: theme('fontSize.base-100'),
            lineHeight: theme('lineHeight.base-100')
        },
        '.caption-2-strong': {
            fontFamily: theme('fontFamily.base'),
            fontWeight: theme('fontWeight.semibold'),
            fontSize: theme('fontSize.base-100'),
            lineHeight: theme('lineHeight.base-100')
        }
    })

    // subtitle
    addComponents({
        '.subtitle-1': {
            fontFamily: theme('fontFamily.base'),
            fontWeight: theme('fontWeight.semibold'),
            fontSize: theme('fontSize.base-500'),
            lineHeight: theme('lineHeight.base-500')
        },
        '.subtitle-2': {
            fontFamily: theme('fontFamily.base'),
            fontWeight: theme('fontWeight.semibold'),
            fontSize: theme('fontSize.base-500'),
            lineHeight: theme('lineHeight.base-500')
        },
        '.subtitle-2-stronger': {
            fontFamily: theme('fontFamily.base'),
            fontWeight: theme('fontWeight.bold'),
            fontSize: theme('fontSize.base-400'),
            lineHeight: theme('lineHeight.base-400')
        }
    })

    // title
    addComponents({
        '.title-1': {
            fontFamily: theme('fontFamily.base'),
            fontWeight: theme('fontWeight.semibold'),
            fontSize: theme('fontSize.base-800'),
            lineHeight: theme('lineHeight.base-800')
        },
        '.title-2': {
            fontFamily: theme('fontFamily.base'),
            fontWeight: theme('fontWeight.semibold'),
            fontSize: theme('fontSize.hero-700'),
            lineHeight: theme('lineHeight.hero-700')
        },
        '.title-3': {
            fontFamily: theme('fontFamily.base'),
            fontWeight: theme('fontWeight.semibold'),
            fontSize: theme('fontSize.hero-600'),
            lineHeight: theme('lineHeight.hero-600')
        },
        '.large-title': {
            fontFamily: theme('fontFamily.base'),
            fontWeight: theme('fontWeight.semibold'),
            fontSize: theme('fontSize.hero-900'),
            lineHeight: theme('lineHeight.hero-900')
        }
    })
    // display
    addComponents({
        '.display': {
            fontFamily: theme('fontFamily.base'),
            fontWeight: theme('fontWeight.semibold'),
            fontSize: theme('fontSize.hero-1000'),
            lineHeight: theme('lineHeight.hero-1000')
        }
    })
})
