import logo from './logo.svg';
import './App.css';
import FullName from './Components/FullName';
import Address from './Components/Address';
import ProfilePhoto from './Components/ProfilePhoto';

function App() {
  return (
    <div className='d-flex justify-content-center'>
      <div className="card">
      <ProfilePhoto></ProfilePhoto>
      <div className="card-body">
    <FullName></FullName>
    <Address></Address>
    </div>
    </div>
   </div>
  );
}

export default App;
