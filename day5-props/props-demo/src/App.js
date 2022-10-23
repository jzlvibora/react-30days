import "./App.css";

const getUserInfo = (firstname, lastname, country) => {
  return `${firstname} ${lastname}. Lives in ${country}.`;
};

getUserInfo("Ash", "Lynx", "Germany");

const User = (props) => {
  return (
    <div>
      <h1>
        {props.firstname}
        {props.lastname}
      </h1>
      <small>{props.country}</small>
    </div>
  );
};

const welcome = "Welcome to Finland";
const title = "Life in Finland";
const subtitle = "nature";
const author = {
  firstname: "Liz",
  lastname: "Jackson",
};
const date = "October 23, 2022";

const Header = (props) => {
  console.log(props);
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <small>{date}</small>
      </div>
    </header>
  );
};

// boolean props type
const Status = (props) => {
  let status = props.status ? "Old enough to drive" : "Too young to drive";
  return <p>{status}</p>;
};

//array props type
const Skills = (props) => {
  const skillList= props.skills.map((skill)=><li key={skill}>{skill}</li>)
  return <ul>{skillList}</ul> 
};

//object props type
const Banner = (props) =>{
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
      </div>
    </header>
  )
}

//function prop type
const Button = (props) =>{
  return(
  <button onClick={props.onClick}>{props.text}</button> 
  )
}

function App() {
  const welcome = "Welcome to 30 Days of React ";
  const title = "Getting Started with React";
  const subtitle = "Javascript Library";
  const firstName = "Eiji";
  const lastName = "Okimura";
  const date = "October 23, 2020";
  let currentYear = 2022;
  let birthYear = 2015;
  const age = currentYear - birthYear;
  const status = age >= 18;

  const data ={
    welcome:"Happy Hacking",
    title:"React is fun",
    subtitle:"JS Library"
  }

  const clicked = () =>{
    alert("Button clicked")
  }

  return (
    <div className="App">
      <User firstname="Eiji" lastname="Okimura" country="Japan" />
      <Header
        firstName={firstName}
        lastName={lastName}
        title={title}
        subtitle={subtitle}
        welcome={welcome}
        date={date}
      />
      <Status status={status} />
      <Skills skills={["HTML", "CSS", "JS"]} />
      <Banner data={data}/>
      <Button text="Button1" onClick={clicked}/>  
    </div>
  );
}

export default App;
