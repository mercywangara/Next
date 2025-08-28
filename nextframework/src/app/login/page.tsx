import Header from "../shared-components/header";
import Navigation from "../shared-components/navigation";
import Button from "../shared-components/button";
import Footer from "../shared-components/footer";


const LoginPage = () => {
  return (
    <div>
        <Header />
        <Navigation />
        <div>
            <h2>Login</h2>
            {/* Login form goes here */}
            <Button label="Login" onClick={() => {}} />
        </div>
        <Footer />
    </div>
  );
};

export default LoginPage;
