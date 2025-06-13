import React from 'react';
import './skills.css';
import { Link } from 'react-router-dom';
import vue from './assets/vue.png'; 
import laravel from './assets/laravel.png';
import postgres from './assets/postgres.png';
import mysql from './assets/mysql.png';
import cassandra from './assets/cassandra.png';
import php from './assets/php.png';
import js from './assets/js.png';
import python from './assets/python.png';
import ubuntu from './assets/ubuntu.png';
import windows from './assets/windows.png';

function Skills() {
    return (

        <div className='container'>

            <aside className="menu">
                <ul>
                    <li className="active">
                        <Link to="/">INICIO</Link>
                    </li>
                    <li>
                        <Link to="/habilidades">HABILIDADES</Link>
                    </li>
                    <li>
                        <Link to="/proyectos">PROYECTOS</Link>
                    </li>
                    <li>
                        <Link to="/contacto">CONTACTO</Link>
                    </li>
                </ul>
            </aside>


            <div className="skills-container">
                <h1>»» HABILIDADES ««</h1>
                <div className="skills-grid">
                    <div>
                        <h3>• Desarrollo de aplicaciones web</h3>
                        <p><img src={vue} alt="Vue" /> Vue</p>
                        <p><img src={laravel} alt="Laravel" /> Laravel</p>
                    </div>

                    <div>
                        <h3>• Experiencia en manejo de bases de datos</h3>
                        <p><img src={postgres} alt="Postgres" /> Postgres</p>
                        <p><img src={mysql} alt="MySQL" /> MySQL</p>
                        <p><img src={cassandra} alt="Cassandra" /> Cassandra</p>
                    </div>

                    <div>
                        <h3>• Conocimientos en lenguajes de programación</h3>
                        <p><img src={php} alt="PHP" /> PHP</p>
                        <p><img src={js} alt="JavaScript" /> JavaScript</p>
                        <p><img src={python} alt="Python" /> Python</p>
                    </div>

                    <div>
                        <h3>• Manejo de diversos entornos</h3>
                        <p><img src={ubuntu} alt="Ubuntu" /> Ubuntu</p>
                        <p><img src={windows} alt="Windows" /> Windows</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
