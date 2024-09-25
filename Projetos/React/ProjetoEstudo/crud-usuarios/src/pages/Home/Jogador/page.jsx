import React from 'react';
import Home from '../page'; 
import './style.css'
import FotoJogador from './Soccer-pana.svg'

const Jogador = () => {
  return (
    <Home>
      <div className="PagJogador">        
        <div className="AreaTopo">
          <div className="LogoJogador">
            <img src={FotoJogador} alt='Foto Jogador'/>
            <div className="DadosJogador">
              <span>Nome: Leo Santos</span>
              <span>Data de Nascimento: 15 de março de 1995</span>
              <span>Nacionalidade: Brasileiro</span>
              <span>Altura: 1,78 m</span>
              <span>Peso: 75 kg</span>
              <span>Posição: Atacante</span>
              <span>Clube Atual: FC Barcelona</span>
              <span>Número da Camisa: 11</span>
            </div>
          </div>
        </div>
        <div className="Dados">
          <div className="TituloAvaliacaoDiv">
            <span className='TituloAvaliacao'>Avaliação</span>
          </div>
          <div className="ProgressBarsContainer">
            <div className="ProgressBar">                        
              <div className="TituloProgressBar">
                <span>Finalização</span>
                <span>80</span>
              </div>            
              <progress value={80} max={100} />
            </div>
            <div className="ProgressBar">                                    
              <div className="TituloProgressBar">
                <span>Passe</span>
                <span>78</span>
              </div>            
              <progress value={78} max={100} />
            </div>
            <div className="ProgressBar">                                    
              <div className="TituloProgressBar">
                <span>Drible</span>
                <span>83</span>
              </div>            
              <progress value={83} max={100} />
            </div>
            <div className="ProgressBar">                                    
              <div className="TituloProgressBar">
                <span>Velocidade</span>
                <span>88</span>
              </div>            
              <progress value={88} max={100} />
            </div>
            <div className="ProgressBar">                                    
              <div className="TituloProgressBar">
                <span>Força</span>
                <span>75</span>
              </div>            
              <progress value={75} max={100} />
            </div>
            <div className="ProgressBar">                                              
              <div className="TituloProgressBar">
                <span>Defesa</span>
                <span>65</span>
              </div>            
              <progress value={65} max={100} />
            </div>
            <div className="ProgressBar">                                              
              <div className="TituloProgressBar">
                <span>Físico</span>
                <span>80</span>
              </div>            
              <progress value={80} max={100} />
            </div>
            <div className="ProgressBar">                                    
              <div className="TituloProgressBar">
                <span>Controle de Bola</span>
                <span>82</span>
              </div>            
              <progress value={82} max={100} />
            </div>
            <div className="ProgressBar">                                    
              <div className="TituloProgressBar">
                <span>Visão de Jogo</span>
                <span>77</span>
              </div>            
              <progress value={77} max={100} />
            </div>
            <div className="ProgressBar">  
              <div className="TituloProgressBar">
                <span>Posicionamento</span>
                <span>79</span>
              </div>            
              <progress value={79} max={100} />
            </div>
          </div>          
        </div>        
        
        <div className="DadosCarreira">
        
        </div>
      </div>
    </Home>
  );
};

export default Jogador;