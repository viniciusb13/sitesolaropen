import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EstilosGlobais from "./componentes/EstilosGlobais";
import FaleConosco from "./paginas/FaleConosco";
import Admin from "./paginas/Admin";
import Menu from "./componentes/Menu";
import Bemvindo from "./paginas/Bemvindo";
import Medidas from "./paginas/Medidas";
import Logout from "./paginas/Logout";
import Login from "./paginas/Login";
import DetalhesDevice from "./componentes/DetalhesDevice";
// import { LoginForm, SignupForm } from "./componentes/autentica/Autenticacao";

function App() {
	return (
		<Router>
			<EstilosGlobais />
			<Menu />
			<Routes>
				<Route path="/" element={<Bemvindo />} />
				<Route path="/medidas" element={<Medidas />} />
				<Route path="/medidas/:id" element={<DetalhesDevice />} />
				<Route path="/faleConosco" element={<FaleConosco />} />
				<Route path="/admin" element={<Admin />} />
				{/* <Route path="/cadastro" element={<SignupForm />} />
				<Route path="/login" element={<LoginForm />} /> */}
				<Route path="/entrar" element={<Login />} />
				<Route path="/logout" element={<Logout />} />
			</Routes>
		</Router>
	);
}

export default App;
