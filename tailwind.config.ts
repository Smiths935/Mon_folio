import type {Config} from 'tailwindcss';

const config :Config = {
    content: [
        './app/**/*.{html,js,ts,jsx,tsx}',
        './components/**/*.{html,js,ts,jsx,tsx}',
        './hooks/**/*.{html,js,ts,jsx,tsx}',
        './src/**/*.{html,js,ts,jsx,tsx}',
    ],
    theme:{
        extend:{
            colors:{
                background:"var(--background)",
                foreground:"var(--foreground)",
            }
        }
    },
    plugins:[]
}

export default config ;