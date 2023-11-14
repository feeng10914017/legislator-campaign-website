/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        info: "var(--info)",
        "high-light-primary": "var(--high-light-primary)",
        "high-light-yellow": "var(--high-light-yellow)",
        "high-light-brown": "var(--high-light-brown)",
      },
      fontSize: {
        h1: [
          "60px",
          {
            lightHeight: 1.5,
            fontWeight: 700,
          },
        ],
        h2: [
          "40px",
          {
            lightHeight: 1.5,
            fontWeight: 700,
          },
        ],
        h3: [
          "30px",
          {
            lightHeight: 1.5,
            fontWeight: 700,
          },
        ],
        h4: [
          "24px",
          {
            lightHeight: 1.5,
            fontWeight: 700,
          },
        ],
        h5: [
          "22px",
          {
            lightHeight: 1.5,
            fontWeight: 700,
          },
        ],
        h6: [
          "18px",
          {
            lightHeight: 1.5,
            fontWeight: 500,
          },
        ],
        lt: [
          "22px",
          {
            lightHeight: 1.5,
            fontWeight: 500,
          },
        ],
        nt: [
          "18px",
          {
            lightHeight: 1.5,
            fontWeight: 500,
          },
        ],

        "h1-m": [
          "40px",
          {
            lightHeight: 1.5,
            fontWeight: 700,
          },
        ],
        "h2-m": [
          "25px",
          {
            lightHeight: 1.5,
            fontWeight: 700,
          },
        ],
        "h3-m": [
          "20px",
          {
            lightHeight: 1.5,
            fontWeight: 700,
          },
        ],
        "h4-m": [
          "18px",
          {
            lightHeight: 1.5,
            fontWeight: 700,
          },
        ],
        "h5-m": [
          "16px",
          {
            lightHeight: 1.5,
            fontWeight: 700,
          },
        ],
        "h6-m": [
          "14px",
          {
            lightHeight: 1.5,
            fontWeight: 500,
          },
        ],
        "lt-m": [
          "14px",
          {
            lightHeight: 1.5,
            fontWeight: 500,
          },
        ],
        "nt-m": [
          "12px",
          {
            lightHeight: 1.5,
            fontWeight: 500,
          },
        ],
      },
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
