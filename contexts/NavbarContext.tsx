"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

type NavbarContextType = {
  boltColor: string;
  borderColor: string;
  setBoltColor: (color: string) => void;
  setBorderColor: (color: string) => void;
};

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [boltColor, setBoltColor] = useState("text-indigo-400");
  const [borderColor, setBorderColor] = useState("border-indigo-500/20");
  
  return (
    <NavbarContext.Provider value={{ boltColor, setBoltColor, borderColor, setBorderColor }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within NavbarProvider');
  }
  return context;
}