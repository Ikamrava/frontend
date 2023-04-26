import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './pages/Home';
import {BrowserRouter as Router,Route } from "react-router-dom"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './pages/Product';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/product/:id",
      element: <Product/>,
    },
    
  ]);

  return (
    <div>
      <Header/>
      <main className='py-3'>
        <Container>
        <RouterProvider router={router} />
        </Container>
      </main>
    </div>
    
  );
}

export default App;
