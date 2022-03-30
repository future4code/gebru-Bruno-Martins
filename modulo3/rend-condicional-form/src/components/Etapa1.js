import './App.css';



function Etapa1() {
  return (
      <div>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <div>
            <p>1. Qual o seu nome?</p>
            <input value></input>
            </div>
            <div>
                <p>2. Qual a sua idade?</p>
                <input value></input>
            </div>
            <div>
            <p>3. Qual o seu email?</p>
            <input value></input>
            </div>
            <div>4. Qual a sua escolaridade?
            <select>
                <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                <option value="Ensino médio completo">Ensino médio completo</option>
                <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                <option value="Ensino superior completo">Ensino superior completo</option>
                </select>
                <button>Próxima etapa</button>
            </div>
            
        </div>

    
  );
}

export default App;
