/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-dark": "#102E4A",
                highlight: "#FE5E41"
            }
        }
    },
    plugins: []
}
