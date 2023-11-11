import Usuario from '../Usuario';
import './style.css'

function ListaUsuarios() {
    return (
        <div className='lista-usuarios'>
            <Usuario usuario={
                {
                    name: "Sebas",
                    lastName: "Alarcon",
                    type: "ADMIN",
                    photoUrl: "https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg"
                }
            }/>
        </div>
    );
}

export default ListaUsuarios;