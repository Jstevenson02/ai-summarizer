import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="leetnewslogo" className="w-52 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/Jstevenson02/ai-summarizer")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Feed your brain daily news bits and bites with LeetNews, an open-source
        news media summarization tool that breaks down lengthy articles into
        digestable and concise chunks
      </h2>
    </header>
  );
};
export default Hero;
