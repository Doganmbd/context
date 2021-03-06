import useFetch from './hooks/useFetch'
import './App.css';
/* import ProductApp from './component/ProductApp';
import ContextApp from './context/ContextApp'; */

function App() {

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );


/*   fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response =>{
    console.log(response);
    return response.json()})
  .then(data => console.log(data));
 */



  return (
    <div className="App">
      {/* <ProductApp/> */}
      {/* <ContextApp/> */}
      
      <h1>Custom Hook</h1>
      {data?.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      ))}
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      


    </div>
  );
}

export default App;
