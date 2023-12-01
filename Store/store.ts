import { create } from 'zustand'

export const useStore = create((set) => ({
    isOpen:true,
 setIsOpen :() => set((state:any)=>({
     isOpen : !state.isOpen
 })),

}))