import './style.css';
import UsuarioForm from '../../components/UsuarioForm';
import ListaUsuarios from '../../components/ListaUsuarios';
import { useState } from 'react';
//Crear una carpeta en components que se llame ListaUsuarios
//npm install axios
//crear un archivo en la raíz del proyecto que se llame .gitignore
function Home() {
    const [isAgregando, setIsAgregando] = useState(false);
    const [usuarios, setUsuarios] = useState([]);

    return (
        <div className="home">
            <button onClick={() => setIsAgregando(true)}>Agregar Usuario</button>
            {isAgregando && <UsuarioForm />}
            <ListaUsuarios />
        </div>
    );
}

export default Home;