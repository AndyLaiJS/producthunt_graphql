This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3 components were made:
• Card
• Dropdown
• JellyBean (which are just those little pill elements)

Tailwind CSS was extensively used. The following commands were used in setting the initial setting for usage of the plugin:
```npm install tailwindcss postcss-cli autoprefixer -D```

To create the tailwind.config.js file:
```npx tailwind init --full```

The following are added into the tailwind.config.js file to enable usage of tailwind css:
```
content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
```

To get PostCSS working:
```touch postcss.config.js```

Inside:
```
module.exports = {
  plugins: ["tailwindcss", "./tailwind.config.js", "autoprefixer"],
};
```

... and finally the last step, in `styles/globals.css` add these lines anywhere:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Save it, and rerun ```npm run dev```. Happy Tailwind-ing.

Future improvement: 
• Search functionality
• Optimization possibility with either useMemo or useCallback
• Redux could've been used as a centralized storage for all the states being used (instead of using props resulting in props drilling)

Thank you visiting this repository. Have a great day!
