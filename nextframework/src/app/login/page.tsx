'use client'
import Header from "../shared-components/header/index";
import Button from "../shared-components/button";
import Navigation from "../shared-components/navigation";
import Footer from "../shared-components/footer";


const LoginPage = () => {
  return (
    <div>
        <Header />
        <Navigation />
        <div>
            <h2>Login</h2>
            {/* Login form goes here */}
            <Button label="Login" onClick={() => alert("congratulations")} />
        </div>
        <Footer />
    </div>
  );
};

export default LoginPage;
