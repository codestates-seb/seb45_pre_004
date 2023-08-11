import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/MainPage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import QnAWritePage from "./pages/QnAWritePage";
import QnADetailPage from "./pages/QnADetailPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigator from "./components/Navigator";

function App() {

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/write" element={<QnAWritePage />} />
				<Route path="/detail" element={<QnADetailPage />} />
			</Routes>
			<Navigator />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
