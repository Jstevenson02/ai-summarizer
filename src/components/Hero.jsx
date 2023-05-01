import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-col">
        <img src={logo} alt="leetnewslogo" className="w-52 object-contain" />
      </nav>
    </header>
  );
};
export default Hero;
