import {Routes,Route} from 'react-router-dom'
// import Pop from './component/Pop'
import Form from './component/Form.jsx'
import Login from '../src/component/Login.jsx'
import Forgetpassword from './component/Forgetpassword.jsx'
// import Navbar from './component/Navbar'
function App() {
    
  return (
    <>
    
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/forget" element={<Forgetpassword/>}/>
      </Routes>
      {/* <Form/> */}
      {/* <Pop/> */}
    </>
  )
}

export default App
