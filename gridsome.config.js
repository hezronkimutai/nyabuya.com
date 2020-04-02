const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
	tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
    siteName: 'Bonvic portfolio and Blog',
    siteDescription: "Bonvic is a blogger and full-stack developer. It's inspired by https://mattfarley.ca, built in gridsome and styled with Tailwind CSS.",
    siteUrl: 'https://nyabuya.com',
    titleTemplate: `%s | Bonvic`,
    plugins: [],
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
}
