import './App.css';
import { NewsContextProvider } from './NewsContextApi';


function App() {
  return (
    <NewsContextProvider> 
      <div> 
        Hello from App
      </div> 
    </NewsContextProvider>
  );
}

export default App;
