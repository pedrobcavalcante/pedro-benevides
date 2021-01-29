import Navbar from './components/navbar/navbar'

function App() {
  return (
    <div>
      <Navbar children={<div>teste</div>}></Navbar>
      <div>
        {
          // gerador()
        }
      </div>
    </div>
  );
}
const gerador = () => {
  let res = [];
  for (let i = 0; i < 1000; i++) {
    res.push(<p>numero {i}</p>)
  }
  return res
}
export default App;
