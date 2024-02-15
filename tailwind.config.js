/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tertairy': '#e50082'
      },
      backgroundImage: {
        'header': "url('https://insperity.myisolved.com/Content/Images/honeycomb_pattern_bgd.png')",
        'icon': "url('https://insperity.myisolved.com/Content/Images/MarketingPanel/ExploreIsolvedPeopleCloudButton.png')"
      }
    },
  },
  plugins: [],
}

