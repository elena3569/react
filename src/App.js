import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createTheme({
  palette: {
    primary: blue
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        Home
      </div>
    </ThemeProvider>
  );
}
export default App;
// ReactDOM.render(<App />, document.querySelector('#app'));