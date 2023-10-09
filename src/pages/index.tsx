import RootLayout from '../components/layout';
import '../styles/index.css'
import { Nav, Navbar, Container, Card } from 'react-bootstrap';

export default function Home() {
  return (
    <RootLayout>
      <header className='header'>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
          <Navbar.Brand href="#home">sealddr&apos;s Portfolio Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" className='active'>About</Nav.Link>
              <Nav.Link href="resume">Resume</Nav.Link>
              <Nav.Link href="products">Products</Nav.Link>
              <Nav.Link href="blogs">Blogs</Nav.Link>
              <Nav.Link href="link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Container id="under-construction" style={{minHeight: 'calc(100vh - 150px)'}}>
        <h1>About me</h1>
        <Card style={{ width: '24rem'}}>
          <Card.Img variant="top" src="/images/sealddr.png" />
          <Card.Body>
            <Card.Title>sealddr</Card.Title>
            <Card.Text>
                <table>
                  <tr>
                    <td>address:</td>
                    <td>Osaka city, Osaka pref.</td>
                  </tr>
                  <tr>
                    <td>Job:</td>
                    <td>ICT Architect, Researcher</td>
                  </tr>
                  <tr>
                    <td>Birth:</td>
                    <td>May, 1982</td>
                  </tr>
                  <tr>
                    <td>Grade:</td>
                    <td>M. S. in Informatics, Kyoto University</td>
                  </tr>
                  <tr>
                    <td>GitHub:</td>
                    <td>sealddr</td>
                  </tr>
                  <tr>
                    <td>Twitter:</td>
                    <td>@sealddr</td>
                  </tr>
                </table>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </RootLayout>
  )
}