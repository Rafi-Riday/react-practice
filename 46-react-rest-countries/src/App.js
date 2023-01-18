import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Countries />
      <Footer />
    </div>
  );
}

// function Countries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch(`https://restcountries.com/v3.1/all`)
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, []);
//   return (
//     <div>
//       <h1>React Rest Countries</h1>
//       <h4>There are {countries.length} countries</h4>
//       {
//         countries.map(country => <DisplayCountry name={country.name.common} capital={country.capital ? country.capital.join(', ') : 'No Capital'} region={country.region ? country.region : 'No Region'} />)
//       }
//     </div>
//   )
// }

// function DisplayCountry(props) {
//   return (
//     <div style={{ border: '2px solid red', margin: '5px', borderRadius: '15px' }}>
//       <h3>Name : {props.name}</h3>
//       <p>Capital : {props.capital}</p>
//       <p>Region : {props.region}</p>
//     </div>
//   );
// }

export default App;
