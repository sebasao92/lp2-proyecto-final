import Usuario from '../Usuario';
import './style.css'

function ListaUsuarios({ usuarios, onEliminar }) {
    return (
        <div className='lista-usuarios'>
            {
              usuarios.map((usuario, index) => <Usuario key={index} usuario={usuario} onEliminar={onEliminar}/>) 
            }
        </div>
    );
}

export default ListaUsuarios;