import Header from "./Header";
import useMoviesData from "../Hooks/useMoviesData";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  useMoviesData();
  usePopularMovies();
  useTopRatedMovies();

  const gptToggleState = useSelector((store) => store.gpt.gptToggleState);

  return (
    <div>
      <Header />
      {gptToggleState ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
