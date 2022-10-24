import './App.css';

// MAPPING ARRAY OF NUMBERS
const Numbers =({numbers})=>{
  const list = numbers.map((num)=>{
    return(
    <li key={num}>{num}</li>
    )
  })
  console.log(list)

  return list
}

// MAPPING ARRAY OF ARRAYS
const skills =[
  ["HTML", 10],
  ["CSS", 9],
  ["JS", 8],
  ["React", 9]
]

const Skill = ({skill:[tech,level]})=>{
  return(
    <li key={tech}>{tech} | {level}</li>
  )
}

const Skills = ({skills}) =>{
  const skillsList = skills.map((skill)=> <Skill skill={skill} key={skill}/>)
  console.log(skillsList);
  return skillsList;

}

// MAPPING ARRAY OF OBJECTS

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

const Country = ({country:{name, city}})=>{
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

const Countries = ({countries}) => {
  const countryList = countries.map((country)=>{
    return <Country country={country} key={country.name}/>
  })

  return countryList;

}

function App() {
  const numbers = [8,7,6,5,4]

  return(
    <div className="App">
        <div className="container">
          <div>
            <h1>Numbers List</h1>
            {[1,2,3,4,5]}
          </div>
          <hr />
          <Numbers numbers={numbers}/>
          <hr />
          <Skills skills={skills}/>
          <hr />
          <Countries countries={countries}/>
          <hr />
        </div>
    </div>
  )
  
}

export default App;
