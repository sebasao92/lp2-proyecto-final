import "./Usuario.css"
import BotonActualizar from "../BotonActualizar/BotonActualizar";
import BotonBorrar from "../BotonBorrar/BotonBorrar";

function Usuario({nombre, apellido}) {
    return (
        <div>
            <img/>
            <h3>{nombre}</h3>
            <h3>{apellido}</h3>
            <BotonBorrar />
            <BotonActualizar />
        </div>
    );
}

export default Usuario;