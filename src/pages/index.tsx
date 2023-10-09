import RootLayout from '../components/layout';
import '../styles/index.css'
import { Container, Card, Table } from 'react-bootstrap';

export default function Home() {
  return (
    <RootLayout>
      <Container id="under-construction" style={{minHeight: 'calc(100vh - 150px)'}}>
        <h1>About me</h1>
        <Card style={{ width: '24rem'}}>
          <Card.Img variant="top" src="/images/sealddr.png" />
          <Card.Body>
            <Card.Title>sealddr</Card.Title>
            <Table borderless responsive="sm">
              <tbody>
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
                </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </RootLayout>
  )
}