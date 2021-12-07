import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Counter from './pages/counter'
import Get from './pages/get'
import Post from './pages/post'
//hg''      HG""                          
function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <Get/>
      {/* <Post/> */}
    </div>
  );
}

export default App;
