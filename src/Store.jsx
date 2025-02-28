import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  closeSidebar: () => set({ isOpen: false }),
}));

//zustand is a simple and fast state management library that lets you build fully-featured applications. The API is based on the context API and hooks, and it is compatible with React, Preact, and even vanilla JS. It is a standalone library that does not require any dependencies
//The create function is used to create a store. It takes a function as an argument that receives a set function as an argument. The set function is used to update the store state. In this case, the store has two methods: toggleSidebar and closeSidebar, which are used to toggle and close the sidebar, respectively.
