import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css';

import { ReactNode, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const router = useRouter();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'sealddr\'s portfolio - ' + router.pathname;
    if (mainRef.current) {
      mainRef.current.style.marginTop = `${document.querySelector('header')?.clientHeight}px`;
    }
  }, [router.pathname]);

  return (
    <div>
      <main className='main'>{children}</main>
      <footer className='footer'>
        <p>&copy; 2023 sealddr</p>
      </footer>
    </div>
  );
}