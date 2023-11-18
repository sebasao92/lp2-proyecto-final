import './style.css';
import UsuarioForm from '../../components/UsuarioForm';
import ListaUsuarios from '../../components/ListaUsuarios';
import { useState, useEffect } from 'react';
import { eliminarPorId, getUsuarios } from '../../services/UsuariosService';

function Home() {
    const [isAgregando, setIsAgregando] = useState(false);
    const [usuarios, setUsuarios] = useState([]);

    function obtenerTodosLosUsuarios() {
        getUsuarios()
            .then(resultado => setUsuarios(resultado.data))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        obtenerTodosLosUsuarios()
    }, []);

    function eliminarUsuario(id) {
        eliminarPorId(id)
            .then(() => obtenerTodosLosUsuarios())
            .catch(error => console.log(error))
    }

    return (
        <div className="home">
            <button onClick={() => setIsAgregando(true)}>Agregar Usuario</button>
            {isAgregando && <UsuarioForm onCerrar={() => setIsAgregando(false)} />}
            <ListaUsuarios usuarios={usuarios} onEliminar={eliminarUsuario}/>
        </div>
    );
}

export default Home;