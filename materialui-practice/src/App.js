import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme'
import './App.css';
// import MaterialHome from './components/material-home';
import ReactRouter from './router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <MaterialHome /> */}
      <ReactRouter/>
    </ThemeProvider>
  )
}

export default App;
