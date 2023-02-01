// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Banner from './componentes/Banner';
import './componentes/Banner/banner.css'
import './componentes/CampoTexto/CampoTexto.css'
import { Footer } from './componentes/Footer';


// import CampoTexto from './componentes/CampoTexto';
import { Formulario } from './componentes/Formulario';
import { Time } from './componentes/Time';




function App() {

  const times = [{

    nome: 'Programação',
    corPrimaria: '#57C278',
    corSegundaria: '#D9F7E9',

  },
  {

    nome: 'Front-End',
    corPrimaria: '#82CFFA',
    corSegundaria: '#E8F8FF',

  },
  {

    nome: 'Data Science',
    corPrimaria: '#A6D157',
    corSegundaria: '#F0F8E2',

  },
  {

    nome: 'Devops',
    corPrimaria: '#E06B69',
    corSegundaria: '#FDE7E8',

  },
  {

    nome: 'UX e Design',
    corPrimaria: '#DB6EBF',
    corSegundaria: '#FAE9F5',

  },
  {

    nome: 'Mobile',
    corPrimaria: '#FFBA05',
    corSegundaria: '#FFF5D9',

  },
  {

    nome: 'Inovação e Gestão',
    corPrimaria: '#FF8A29',
    corSegundaria: '#FFEEDF',

  }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorCadastrado = (colaborador) => {
    // debugger


    setColaboradores([...colaboradores, colaborador])


  }

  return (
    <div className="App">
      <Banner />
      <Formulario times= {times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador, setColaboradores)} />
 
  {times.map(time => <Time 
  key={time.nome}
  nome={time.nome} 
  corPrimaria={time.corPrimaria} 
  corSegundaria={time.corSegundaria} 
  
  colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
  />)}
      


     
      <Footer/>
    </div>
  );
}

export default App;


