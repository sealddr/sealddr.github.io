import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import { ReactNode, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Nav, Navbar, Container, Offcanvas } from 'react-bootstrap';

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
      <header className='header'>
        <Navbar bg="primary" data-bs-theme="dark" key='sm' expand='sm' className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#home">sealddr&apos;s Portfolio Site</Navbar.Brand>
            <Navbar.Toggle aria-controls='offcanvasNavbar-expand-${sm}' />
            <Navbar.Offcanvas 
              id='offcanvasNavbar-expand-${sm}'
              aria-labelledby='offcanvasNavbar-expand-${sm}'
              placement='end'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>sealddr&apos;s Portfolio Site</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-begin flex-grow-1 pe-3">
                  <Nav.Link href="/" active>About</Nav.Link>
                  <Nav.Link href="#">Resume</Nav.Link>
                  <Nav.Link href="#">Products</Nav.Link>
                  <Nav.Link href="#">Blogs</Nav.Link>
                  <Nav.Link href="#">Link</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
      <main className='main'>{children}</main>
      <footer className='footer'>
        <p>&copy; 2023 sealddr</p>
      </footer>
    </div>
  );
}