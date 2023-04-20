import { neutral, blue } from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                primary: blue,
                gray: neutral,
            },
        },

        fontFamily: {
            sans: ['Inter'],
            mono: ['Fira Code'],
        },
    },
	plugins: []
};