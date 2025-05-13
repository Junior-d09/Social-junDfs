'use client'

import { usePathname } from 'next/navigation';
import UINavbar from './navbar/UINavbar';

export default function NavbarWrapper() {
  const pathname = usePathname();
  
  // Ne pas afficher la navbar sur la page de connexion (page d'accueil)
  if (pathname === '/' || pathname === '/login') {
    return null;
  }
  
  return <UINavbar />;
}