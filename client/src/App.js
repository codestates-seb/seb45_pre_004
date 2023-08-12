import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/MainPage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import QnAWritePage from "./pages/QnAWritePage";
import QnADetailPage from "./pages/QnADetailPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigator from "./components/Navigator";
import { useDispatch, useSelector } from "react-redux";
import { readBrowserWidth } from "./redux/actions/browserWidthAction";
import { useEffect } from "react";

function App() {
	const dispatch = useDispatch();
	const deviceWidth = useSelector((state)=>state.browserWidthReducer);

	//브라우저의 너비가 바뀔 때 실행되는 메소드
	const handleDeviceWidthResize = () => {
		dispatch(readBrowserWidth());
	}

	useEffect(()=>{
		window.addEventListener("resize",handleDeviceWidthResize);
		return () => {
			window.removeEventListener('resize',handleDeviceWidthResize);
		}
	})

	return (
		<BrowserRouter>
			<Header />
			{deviceWidth}
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/write" element={<QnAWritePage />} />
				<Route path="/detail" element={<QnADetailPage />} />
			</Routes>
			{
				deviceWidth>800?<Navigator />:null
			}					
			<Footer />
		</BrowserRouter>
	);
}

export default App;
