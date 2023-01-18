import logo from './logo.svg';
import './App.css';

/**
 * components, using components loop
 */

const stylePerson = {
  color: '#fff',
  backgroundColor: '#000a',
  margin: '10px',
  padding: '10px',
  border: '5px solid #fff',
  borderRadius: '10px',
};

function App() {
  const persons = [{ name: 'Jhankar Mahbub', job: 'Programmer', }, { name: 'Rafiul Hossain Riday', job: 'Programmer', }, { name: 'Rubel', job: 'Cricket', }, { name: 'Shakib Khan', job: 'Nayok', }];
  return (
    <div className='App' style={{ background: '#888', padding: '20px', }}>
      {
        persons.map(person => <Person name={person.name} job={person.job} />)
      }

      {/* <Person name='Jhankar Mahbub' job='Programmer' />
      <Person name='Rafiul Hossain Riday' job='Programmer' />
      <Person name='Rubel' job='Cricket' />
      <Person name='Shakib Khan' job='Nayok' /> */}
    </div>
  );
}

function Person(props) {
  return (
    <div style={stylePerson}>
      <h2>Name : {props.name}</h2>
      <p>Job : {props.job}</p>
    </div>
  );
}

export default App;
