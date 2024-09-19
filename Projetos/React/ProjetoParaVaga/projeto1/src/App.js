import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <body>
        <ThemeProvider theme={theme}>  
          <Login />
        </ThemeProvider>
    </body>      
    </div>
  );
}

export default App;
