    "use client"
    // components/ThemeToggle.js
    import { useTheme } from 'next-themes';


    function ThemeToggle() {
      const { theme, setTheme } = useTheme();

      return (

        
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='border p-2 rounded cursor-pointer'>
            Toggle Theme
            </button>

         
      );
    }

    export default ThemeToggle;