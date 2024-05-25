import { useState } from 'react';


const Home = (props) => {

    const [name, setName] = useState('mario');
    const [age, setAge] = useState('25');

    const handleClick = (e, name) => {
        setName('luigi');
        setAge(10);
        console.log('Hello, '+ name);
        console.log(e.target);
    }

   
    return ( 
        
        <div className="home">
            <h2>{props.title}</h2>
            <p>{name} is {age} old </p>
            <button onClick={(e) => handleClick(e,name)}>Click me</button>
        </div>
     );
}
 
export default Home;