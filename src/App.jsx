import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

import './styles/components/app.sass'

function App() {
  return (
    <div id="container">
      <h1>Victor Hugo Fonseca</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
