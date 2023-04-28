const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            animation: {
                "fade-in": "fade-in 0.5s linear forwards",
                marquee: "marquee var(--marquee-duration) linear infinite",
                "spin-slow": "spin 4s linear infinite",
                "spin-slower": "spin 6s linear infinite",
                "spin-reverse": "spin-reverse 1s linear infinite",
                "spin-reverse-slow": "spin-reverse 4s linear infinite",
                "spin-reverse-slower": "spin-reverse 6s linear infinite",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
