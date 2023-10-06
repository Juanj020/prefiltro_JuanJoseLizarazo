import './Contenedores.css'

import imagen from './../../img/a.webp'
import casa from './../../img/casa-removebg-preview.png'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Cajas from './../Cajas/Caja'
import Cargos from './../Cargos/Cargos'
import Cliente from '../Clientes/Clientes'
import Restaurante from '../Restaurante/Restaurante'

export default function Contenedor(){
    return(
        <div className='Contenedor'>
            <Router>
            <div className='contenedor-izq'>
                <img className='imagen-izq' src={imagen} alt='dasda'></img>
                <Link to="/create/">
                    <a href="/"><img className="imagen-casita" src={casa} alt='Holi'></img></a>
                </Link>
                <Link to="/create/caja">Cajas</Link>
                <Link to="/create/cargo">Cargos</Link>
                <Link to="/create/cliente">Clientes</Link>
                <a href="dsad">Facturas</a>
                <a href="dsad">Personal</a>
                <Link to="/create/restaurante">Restaurantes</Link>
                <a href="dsad">Administradores</a>
            </div>
            <Switch>
                <Route exact path="/create/caja">
                    <div className='contenedor-der'>
                        <Cajas></Cajas>
                    </div>
                </Route>
                <Route path="/create/cargo">
                    <div className='contenedor-der'>
                        <Cargos></Cargos>
                    </div>
                </Route>
                <Route path="/create/cliente">
                    <div className='contenedor-der'>
                        <Cliente></Cliente>
                    </div>
                </Route>
                <Route path="/create/restaurante">
                    <div className='contenedor-der'>
                        <Restaurante></Restaurante>
                    </div>
                </Route>
            </Switch>
        </Router>
        </div>
    )
} 