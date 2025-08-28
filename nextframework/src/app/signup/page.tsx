import Header from "../shared-components/header";
import Navigation from "../shared-components/navigation";
import Button from "../shared-components/button";
import Footer from "../shared-components/footer";

const SignupPage = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div>
        <h2>Sign Up</h2>
        {/* Sign up form goes here */}
        <Button label="Sign Up" onClick={() => {}} />
      </div>
        <Footer />
    </div>
  );
};

export default SignupPage;
