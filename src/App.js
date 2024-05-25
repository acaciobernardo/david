import logo from './logo.svg';
import './style-main.css';
import imagem from './hotel_room.png';
import hcsLogo from './Hotel Chase Scene.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import LoginForm from './Components/LoginForm/LoginForm';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from './NavBar';
import Home from './Home';


function App() {
  const title = 'Welcome to the app ';
  const [quartos, setQuartos] = useState([]);
  const [nome, setNome] = useState();

  const fetchQuartos = async () => {
    fetch(`http://localhost:5000/quarto`)
      .then(res => res.json())
      .then((result) => setQuartos(result));
  }
  

  return (
    <div>
    
      <div><p></p></div>
      <div><img src={hcsLogo} width="300" /></div>
      <div className="sidenav">
        <a href="sobre-nos">Sobre Nós</a>
        <a href="quartos">Quartos</a>
        <a href="contactos">Contactos</a>
        <a href="login">Login</a>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Quartos />} />
          <Route path='/quartos' element={<Quartos />} />
          <Route path='/sobre-nos' element={<SobreNos />} />
          <Route path='/contactos' element={<Contactos />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/comprar' element={<Comprar />} />
        </Routes>
      </BrowserRouter>



    </div>
    
  );

  function LoginScreen() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  };

  function BookCompleto() {
    alert("Booking completo com sucesso!");
  }

  function Booking() {
    var bookingId = 0;
  

    fetch(`http://localhost:5000/quarto?id=0`)
        .then(res => res.json())
        .then((data) => {
          console.log(data[0].Quartoid)
         setNome(data[0].descricao);
        })

        console.log(quartos[0].descricao);

    return (
      <div>
        <p></p>
        <h1 className='back'>Booking de quarto</h1>
        <img src={quartos[bookingId].imagem} />
        <h2 className='back'>Nome: {quartos[bookingId].descricao}</h2>
        <h2 className='back'>Preço: {quartos[bookingId].preco}</h2>
        <div className='back'><button type="submit" onClick={BookCompleto}>Comprar</button></div>

      </div>
    );
  };


  function SobreNos() {
    return (
      <div>
        <p></p>
        <img src={imagem} />
        <div className='back'><h1>Sobre Nós</h1></div>
        <div className='back'><h3>Hotel Chase Scene™ é um hotel dedicado aos amantes internacionais de hoteis.</h3>
        <h3>Nós operamos em Lisboa onde temos disponíveis diversos quartos </h3>
        <h3>com um número de estrelas variável.</h3>
        <h3>Hotel Chase Scene foi fundado por David Ramos e Ricardo Forte em 2024</h3>
        <h3>Após ter recebido um investimento da Organisação Bento de Jesus Caraça.</h3></div>

      </div>
    );
  }

  function Contactos() {
    return (
      <div>
        <p></p>
        <img src={imagem} />
        <div className='back'><h1>Contactos</h1></div>
        <h3>--------------------------------------------------------------------</h3>
        <div className='back'><h2>email: hotelchasescene@gmail.com</h2>
        <h2>telephone: +351 555 313 727</h2></div>
      </div>
    );
  }

  function Comprar() {
    return (
      <div></div>
    );
  }

  function Quartos() {
    return (
      <div>
        <div className='back'><h1>Quartos</h1></div>
        <div><p></p></div>
        <div>
          {quartos.map(({ Quartoid, descricao, imagem, preco }) =>
            <div>
              <p></p>
              <img src={imagem} />
              <div className='back'><h1>{descricao}</h1></div>
              <div className='back'><h2>Preço: {preco}€</h2></div>
              <div className='back'><button type="button" onClick={() => BuyButtonPressed(Quartoid)} >Comprar</button></div>
            </div>
          )}
        </div>
      </div>
    );
  }
  

  function BuyButtonPressed(id) {
    alert(id);
    return <Navigate to="/comprar" />;
  }

  function MostrarQuartoEspecifico(preco, nome, imagem) {
    return (
      <div>
        <div><h1>-------------------------------------------</h1></div>
        <div><h1>------------------------------------------------------------------</h1></div>
        <div><h1>-------------------------------------------</h1></div>
        <img src={imagem} className='imagemQuarto'/>
        <div><h1>{nome}</h1></div>
        <div><h2>Preço: {preco}€</h2></div>
        <button type="button" onClick={BuyButtonPressed} >Comprar</button>
        <div><h1>-------------------------------------------</h1></div>
        <div><h1>------------------------------------------------------------------</h1></div>
        <div><h1>-------------------------------------------</h1></div>
      </div>
    );
  }


  function MostrarQuarto(id) {
    fetch(`http://localhost:5000/quarto?id=${id}`)
      .then(res => res.json())
      .then((result) => {
        if (result.length == 0) {
          alert('Quarto não existe!!');
        }
        else {
          //alert('Quarto existe!!');
          console.log(result[0].preco, result[0].descricao, result[0].imagem);
          MostrarQuartoEspecifico(result[0].preco, result[0].descricao, result[0].imagem);
        }
      })

  }


}

export default App;
