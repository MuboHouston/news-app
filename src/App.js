import './App.css';
import { NewsContextProvider } from './NewsContextApi';
import News from './components/News';


function App() {
  return (
    <NewsContextProvider> 
      <News />
    </NewsContextProvider>
  );
}

export default App;
