import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderUser from "../layouts/components/Header/headerUser";

const App = () => {
    return (
        <Router>
            <HeaderUser /> 
            <Routes>
                <Route path="/" element={null} />
                <Route path="/about" element={null} />
            </Routes>
        </Router>
    );
}
export default App;
