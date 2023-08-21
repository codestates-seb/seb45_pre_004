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
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react"; // import가 반드시 한 곳에서만 일어나야함, 만약 detail페이지에서도 쓸것이라면 좀 더 공통 상위의 코드에서 props로 각각 내려볼 수도 있을것임

function App() {
	const dispatch = useDispatch();
	const deviceWidth = useSelector((state) => state.browserWidthReducer);
	const location = useSelector((state)=>state.locationReducer);

	useEffect(() => {
		//브라우저의 너비가 바뀔 때 실행되는 메소드
		const handleDeviceWidthResize = () => {
			dispatch(readBrowserWidth());
		};
		window.addEventListener("resize", handleDeviceWidthResize);
		return () => {
			window.removeEventListener("resize", handleDeviceWidthResize);
		};
	}, [dispatch]);
	console.log(location)
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="*" element={<Main/>}/>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route
					path="/write"
					element={<QnAWritePage Editor={Editor} CKEditor={CKEditor} />}
				/>
				<Route
					path="/detail/:id"
					element={<QnADetailPage Editor={Editor} CKEditor={CKEditor} />}
				/>
			</Routes>
			{deviceWidth > 800 && location!=='/login' && location!=='/signup'? <Navigator /> : null}
			<Footer />
		</BrowserRouter>
	);
}

export default App;
