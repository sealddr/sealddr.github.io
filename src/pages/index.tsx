import RootLayout from '../components/layout';
import '../styles/index.css'
import { Nav, Navbar } from 'react-bootstrap';

export default function Home() {
  return (
    <RootLayout>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">sealddr's Portfolio Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" className='active'>About me</Nav.Link>
          <Nav.Link href="resume">Resume</Nav.Link>
          <Nav.Link href="products">Products</Nav.Link>
          <Nav.Link href="blogs">Blogs</Nav.Link>
          <Nav.Link href="link">Link</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>

    <div className="container" style={{ minHeight: 'calc(100vh - 150px)' }}>
      <h1>ポートフォリオサイト準備中</h1>
      <p>現在、ポートフォリオサイトを準備中です。完成までしばらくお待ちください。</p>
    </div>
    </RootLayout>
  )
}