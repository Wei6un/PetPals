/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito'],
                display: ['Fredoka'],
            },
            colors: {
                primary: '#F97316',
                secondary: '#FB923C',
                cta: '#2563EB',
                'warm-bg': '#FFF7ED',
                'text-main': '#9A3412',
            },
        },
    },
    plugins: [],
}
