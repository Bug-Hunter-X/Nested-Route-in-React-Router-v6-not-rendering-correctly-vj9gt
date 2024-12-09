```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactLayout/>}>
          <Route path="form" element={<ContactForm/>}/>
          <Route path="" element={<ContactDefault/>}/>
        </Route>        
      </Routes>
    </BrowserRouter>
  );
}

function ContactLayout(){
  let location = useLocation();
  console.log(location);
  return(
    <div>
      {location.pathname === '/contact' ? <p>Contact default view</p> : <></>}
      <Outlet/>
    </div>
  );
}

export default App; 
```