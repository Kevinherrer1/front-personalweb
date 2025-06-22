import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { API_ENDPOINTS } from '../../config/api';
import './auth.css';
import '../menu/menu.css';
import Menu from '../menu/Menu';

function Auth() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        username: ''
    });

    const navigate = useNavigate();
    const { login } = useAuth();

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!isLogin && formData.password !== formData.confirmPassword) {
            return setError('Las contraseñas no coinciden');
        }

        const url = isLogin ? API_ENDPOINTS.AUTH_LOGIN : API_ENDPOINTS.AUTH_REGISTER;
        const body = isLogin
            ? { email: formData.email, password: formData.password }
            : { email: formData.email, password: formData.password, username: formData.username, confirmPassword: formData.confirmPassword };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Ocurrió un error.');
            }

            if (isLogin) {
                login(data.user, data.access_token);
                navigate('/');
            } else {
                // Después de registrarse, cambiar a la vista de login
                setIsLogin(true);
                setError('¡Registro exitoso! Por favor, inicia sesión.');
            }

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className='container'>
            <aside className="menu">
                <Menu />
            </aside>

            <div className="auth-container">
                <button className="menu-toggle" onClick={toggleMenu}>☰ Menú</button>
                <div className="mobile-menu-wrapper">
                    <nav className={`menu mobile-menu ${menuOpen ? 'show' : ''}`}>
                        <Menu isMobile={true} onLinkClick={() => setMenuOpen(false)} />
                    </nav>
                </div>

                <h1>»» AUTENTICACIÓN ««</h1>
                
                {error && <div className="error-message">{error}</div>}

                <div className="auth-tabs">
                    <button 
                        className={`tab ${isLogin ? 'active' : ''}`}
                        onClick={() => { setIsLogin(true); setError(null); }}
                    >
                        INICIAR SESIÓN
                    </button>
                    <button 
                        className={`tab ${!isLogin ? 'active' : ''}`}
                        onClick={() => { setIsLogin(false); setError(null); }}
                    >
                        REGISTRARSE
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="username">Usuario:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                required={!isLogin}
                            />
                        </div>
                    )}
                    
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    
                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required={!isLogin}
                            />
                        </div>
                    )}
                    
                    <button type="submit" className="submit-btn">
                        {isLogin ? 'INICIAR SESIÓN' : 'REGISTRARSE'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Auth; 