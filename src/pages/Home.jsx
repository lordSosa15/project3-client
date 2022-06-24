//Need to import two things to use context on any page/components
import { useContext } from "react";
import { FooterBanner, HeroBanner } from "../components";
import UserContext from "../context/UserContext";

const Home = () => {
  //Getting the user value from the UserContext
  const { user } = useContext(UserContext);

  return (
    <div>
      <HeroBanner />
<br />
      <h1>{user ? `Welcome ${user.email}!` : "BEST DEALS ON THE WEB"}</h1>

      <FooterBanner />
    </div>
  );
};
export default Home;
