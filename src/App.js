import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard name = {"Doe, Jane"} age = {45} hair = {"Black"}/>
      <PersonCard name = {"Smith, John"} age = {88} hair = {"Brown"}/>
      <PersonCard name = {"Fillmore, Millard"} age = {50} hair = {"Brown"}/>
      <PersonCard name = {"Smith, Maria"} age = {62} hair = {"Brown"}/>
    </div>
  );
}

export default App;
