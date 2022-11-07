import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ZetaCodingMainWebsite from "./pages/ZetaCodingMainWebsite";
import RegistrationPage from "./pages/RegistrationPage";
import AboutUsPage from "./pages/AboutUsPage";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import InternshipProgram from "./pages/InternshipProgram";
import LoginPage from "./pages/LoginPage";
import IEEEProject from "./pages/IEEEProject";
import SignUpPage from "./pages/SignUpPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/registration-page":
        title = "";
        metaDescription = "";
        break;
      case "/about-us-page":
        title = "";
        metaDescription = "";
        break;
      case "/software-development":
        title = "";
        metaDescription = "";
        break;
      case "/internship-program":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/ieee-project":
        title = "";
        metaDescription = "";
        break;
      case "/signup-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ZetaCodingMainWebsite />} />

      <Route path="/registration-page" element={<RegistrationPage />} />

      <Route path="/about-us-page" element={<AboutUsPage />} />

      <Route path="/software-development" element={<SoftwareDevelopment />} />

      <Route path="/internship-program" element={<InternshipProgram />} />

      <Route path="/login-page" element={<LoginPage />} />

      <Route path="/ieee-project" element={<IEEEProject />} />

      <Route path="/signup-page" element={<SignUpPage />} />
    </Routes>
  );
}
export default App;
