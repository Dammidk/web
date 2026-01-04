// Login - Diseño Moderno Claro Profesional
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Truck, Eye, EyeOff, Loader2, ShieldCheck, User, Sparkles, MapPin, Gauge, Lock } from 'lucide-react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { ApiError, getErrorMessage } from '../types/error.types';

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!usuario || !password) { toast.error('Ingrese usuario y contraseña'); return; }
        setLoading(true);
        try {
            await login(usuario, password);
            // Delay simulado para mejor UX
            await new Promise(resolve => setTimeout(resolve, 800));
            toast.success('¡Bienvenido!');
            navigate('/');
            navigate('/');
        } catch (err) {
            const error = err as ApiError;
            toast.error(getErrorMessage(error, 'Credenciales inválidas'));
            setLoading(false);
        }
    };

    const handleDemoLogin = (u: string, p: string) => {
        setUsuario(u);
        setPassword(p);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex font-sans overflow-hidden">
            {/* Panel Izquierdo - Branding y Mensaje */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-indigo-600"
            >
                {/* Fondo con Gradiente Vibrante */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-500 to-blue-500 opacity-100"></div>

                {/* Patrón de fondo sutil */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>

                {/* Formas animadas suaves (Luz) */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-white rounded-full blur-[120px] mix-blend-soft-light"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 50, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-300 rounded-full blur-[100px] mix-blend-soft-light"
                />

                {/* Contenido */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between p-16 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-3"
                    >
                        <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg">
                            <Truck className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight font-display drop-shadow-sm">
                            Fleet<span className="text-blue-200">Master</span>
                        </span>
                    </motion.div>

                    <div className="space-y-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-5xl lg:text-6xl font-black leading-tight max-w-lg drop-shadow-sm"
                        >
                            Gestión inteligente para tu flota.
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex gap-4 max-w-xl"
                        >
                            <div className="flex-1 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all cursor-default">
                                <Gauge className="w-6 h-6 text-blue-200 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Control Total</h3>
                                <p className="text-sm text-blue-100/80">Gestión en tiempo real de recursos y unidades.</p>
                            </div>
                            <div className="flex-1 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all cursor-default">
                                <MapPin className="w-6 h-6 text-blue-200 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Logística</h3>
                                <p className="text-sm text-blue-100/80">Optimización de rutas y entregas eficientes.</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex justify-between items-end opacity-70 text-sm font-medium tracking-wide">
                        <p>© 2025 FleetMaster Inc.</p>
                        <p className="bg-white/10 px-3 py-1 rounded-full border border-white/10">v2.5.0</p>
                    </div>
                </div>
            </motion.div>

            {/* Panel Derecho - Formulario */}
            <div className="flex-1 flex items-center justify-center p-6 lg:p-12 relative bg-white">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full max-w-md relative z-10"
                >
                    {/* Header Mobile */}
                    <div className="lg:hidden text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl mb-4 shadow-xl shadow-indigo-200">
                            <Truck className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800">FleetMaster</h2>
                    </div>

                    <div className="space-y-6">
                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">¡Hola de nuevo!</h1>
                            <p className="text-slate-500 mt-2">Ingresa tus credenciales para acceder al panel.</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-8 border border-slate-100">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Usuario</label>
                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                                            <User className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="text"
                                            value={usuario}
                                            onChange={e => setUsuario(e.target.value)}
                                            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none font-medium text-slate-800 placeholder:text-slate-400"
                                            placeholder="Ingresa tu usuario"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center ml-1">
                                        <label className="text-sm font-bold text-slate-700">Contraseña</label>
                                        <a href="#" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 hover:underline">
                                            ¿Olvidaste tu contraseña?
                                        </a>
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                                            <Lock className="w-5 h-5" />
                                        </div>
                                        <input
                                            type={showPass ? 'text' : 'password'}
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none font-medium text-slate-800 placeholder:text-slate-400"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPass(!showPass)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors p-1"
                                        >
                                            {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="relative w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-70 disabled:hover:translate-y-0 overflow-hidden mt-4"
                                >
                                    <span className={`flex items-center justify-center gap-2 relative z-10 transition-opacity ${loading ? 'opacity-0' : 'opacity-100'}`}>
                                        Iniciar Sesión <ShieldCheck className="w-4 h-4 opacity-80" />
                                    </span>
                                    {loading && (
                                        <div className="absolute inset-0 flex items-center justify-center z-20">
                                            <Loader2 className="w-6 h-6 animate-spin text-white" />
                                        </div>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Demo Credentials */}
                        <div className="grid grid-cols-2 gap-3 mt-6">
                            <button
                                onClick={() => handleDemoLogin('admin', 'admin123')}
                                className="p-3 border border-slate-100 rounded-xl bg-slate-50 hover:bg-white hover:border-indigo-200 hover:shadow-md transition-all text-left flex items-center gap-3 group"
                            >
                                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                    <ShieldCheck className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-700 group-hover:text-indigo-700">Modo Admin</p>
                                    <p className="text-[10px] text-slate-500">Demo Access</p>
                                </div>
                            </button>

                            <button
                                onClick={() => handleDemoLogin('auditor', 'admin123')}
                                className="p-3 border border-slate-100 rounded-xl bg-slate-50 hover:bg-white hover:border-emerald-200 hover:shadow-md transition-all text-left flex items-center gap-3 group"
                            >
                                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                    <User className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-700 group-hover:text-emerald-700">Modo Auditor</p>
                                    <p className="text-[10px] text-slate-500">Demo Access</p>
                                </div>
                            </button>
                        </div>
                    </div>

                    <p className="text-center text-slate-400 text-xs mt-10">
                        &copy; 2025 FleetMaster. Todos los derechos reservados.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
