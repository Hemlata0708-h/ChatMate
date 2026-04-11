import { create } from 'zustand'

export const useThemeStore = create((set) => ({
 theme: localStorage.getItem("ChatMate-theme")  || "forest",
 setTheme: (theme) =>{ 
    localStorage.setItem("ChatMate-theme", theme);
    set({theme})},
  
}))
