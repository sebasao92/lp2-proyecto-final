import './style.css';
import UsuarioForm from '../../components/UsuarioForm';
import ListaUsuarios from '../../components/ListaUsuarios';
import { useState, useEffect } from 'react';
import { actualizarUsuario, crearUsuario, eliminarPorId, getUsuarios } from '../../services/UsuariosService';

function Home() {
    const [isAgregando, setIsAgregando] = useState(false);
    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState({});

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

    function crearOActualizarUsuarioEnForm(usuario) {
        if(usuario.id == null) {
            crearUsuario(usuario)
                .then(() => obtenerTodosLosUsuarios())
                .catch(error => console.log(error))
        } else {
            actualizarUsuario(usuario)
                .then(() => obtenerTodosLosUsuarios())
                .catch(error => console.log(error))
            setUsuario({});
        }
    }

    function mostrarFormEnActualizar(usuarioASerActualizado) {
        setIsAgregando(true);
        setUsuario(usuarioASerActualizado);
    }

    return (
        <div className="home">
            <button onClick={() => setIsAgregando(true)}>Agregar Usuario</button>
            {isAgregando && <UsuarioForm usuarioActualizar={usuario} onCerrar={() => setIsAgregando(false)} onCrear={crearOActualizarUsuarioEnForm} />}
            <ListaUsuarios usuarios={usuarios} onEliminar={eliminarUsuario} onActualizar={mostrarFormEnActualizar}/>
        </div>
    );
}

export default Home;