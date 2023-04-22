import Container from 'react-bootstrap/Container';
import NavBar from "./NavBar";
import { Outlet } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Layout() {
    return(
        <>
            <NavBar/>
            <Container>
                <Card border="dark" className='mt-4'>
                    <Outlet/>
                </Card>
            </Container>
        </>
    );
}

export default Layout;