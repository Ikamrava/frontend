import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './pages/Product';


function App() {

  const router = createBrowserRouter([
    {
      element:<Header/>,
      children:[  
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/product/:id",
      element: <Product/>,
    },
  ]
  
   }
    
  ])
  

  return (
    <div>
      
      <main className='py-3'>
        <Container>
          <RouterProvider router={router} />
        </Container>
      </main>
    </div>
    
  );
}

export default App;
