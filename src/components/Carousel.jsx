import { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const API_KEY = `0d4030d62b67940c9e96979f816fa897`;
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
const IMG_PATH = "https://image.tmdb.org/t/p/w500";

const Carousel = () => {
  const [pagination, setPagination] = useState(0);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrl = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setApiData(data.results);
      setLoading(false);
    };

    fetchUrl();
  }, []);

  const handleNext = () => {
    if (pagination >= apiData.length - 1) {
      setPagination(0);
    } else {
      setPagination(pagination + 1);
    }
  };
  const handlePrevious = () => {
    if (pagination <= 0) {
      setPagination(apiData.length - 1);
    } else {
      setPagination(pagination - 1);
    }
  };
  return (
    <div className="main">
      {!loading ? (
        <>
          <div className="container">
            <div className="content">
              <img
                src={`${IMG_PATH + apiData[pagination].poster_path}`}
                alt={IMG_PATH}
              />
              <h3>{apiData[pagination].title}</h3>
              <span>{apiData[pagination].id}</span>
              <p>{apiData[pagination].overview}</p>
            </div>
            <div className="button">
              <button onClick={handlePrevious} className="btn rightBtn">
                <SlArrowLeft />
              </button>
              <button onClick={handleNext} className="btn leftBtn">
                <SlArrowRight />
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>LOADING...</p>
      )}
    </div>
  );
};

export default Carousel;
