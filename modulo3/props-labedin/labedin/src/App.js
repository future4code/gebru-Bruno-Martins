import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.ibb.co/Tk4PDqf/Perfil.png" 
          nome="Bruno Martins De Oliveira Gonçalves" 
          descricao="Ola sou o Bruno, tenho 28 anos, atualmente moro no interior de belo horizonte
          trabalhei 10 anos na area de produção, hoje estou indo para area da programação
          levando comigo todo meu foco e minha determinação"
        />
        

        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
         <CardPequeno
          imagem="https://w7.pngwing.com/pngs/963/737/png-transparent-computer-icons-email-icon-design-email-miscellaneous-angle-rectangle.png" 
          nome="brunooliveira8430@hotmail.com" 
        />

         <CardPequeno
          imagem="https://w7.pngwing.com/pngs/255/760/png-transparent-black-location-icon-illustration-computer-icons-adress-miscellaneous-desktop-wallpaper-location.png" 
          nome="Espírito Santo 5508 São José, São Gonçalo RJ" 
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://i.ibb.co/zsSTPfj/53020.png" 
          nome="Egma Distribuidora de Cosmeticos" 
          data="Fev 2014 - Fev 2022"
          descricao="Produção de produtos, manutenção e operação de máquinas, distribuição e abastecimento de materiais"
         
        />
        
        <CardGrande 
          imagem="https://i.ibb.co/zsSTPfj/53020.png" 
          nome="Egma Distribuidora de Cosmeticos" 
          data="Out 2011 - Mar 2013"
          descricao="Produção de produtos, manutenção e operação de máquinas, distribuição e abastecimento de materiais."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
