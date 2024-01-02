import React, { useState, useCallback } from "react";
import Card from "../UI/Card/Card";
import CitiesProps from "./CitiesProps";
import SearchResult from "./SearchResult/SearchResult";
import SearchBarProps from "./SearchBarProps";
import TOKEN from "../../api/apiWeatherProps/Token";
import classes from "./SearchBar.module.css";
import { debounce } from "lodash"


const SearchBar = (props: SearchBarProps) => {
  const [cities, setCities] = useState<CitiesProps[] | []>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [isMouseIn, setIsMouseIn] = useState(false);
  const [index, setIndex] = useState(0);
  const [enterPressed, setEnterPressed] = useState(false);

  const fetchData = useCallback(async (apiUrl: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      data ? setIsEmpty(false) : setIsEmpty(true);
      setIsLoading(false);
      return data;
    } catch (error) {
      console.log(error);
      console.log("error");
    }
  }, []);

  const searchCities = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    if (value && value.length > 2) {
        debouncedSearch(`https://api.weatherapi.com/v1/search.json?key=${TOKEN}&q=${value}`);
    }
  };

  const debouncedSearch = React.useRef(
    debounce(async (criteria) => {
      setCities(await fetchData(criteria));
    }, 2000)
  ).current;

  React.useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch, cities]);

  const handleKey = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    setShowResult(true);
    const keys = ["ArrowUp", "ArrowDown", "Enter"];
    const value = (event.target as HTMLInputElement).value;
    if (!keys.includes(event.code)) {
      return;
    }

    if (event.code === "Enter") {
      event.preventDefault();
      setEnterPressed(true);
      if(index === 0){
        console.log(value)
        const criteria = `https://api.weatherapi.com/v1/search.json?key=${TOKEN}&q=${value}`;
        setCities(await fetchData(criteria));
      }
      return;
    }

    if (event.code === "ArrowUp") {
      if (index > 1 && index <= cities.length) {
        setIndex(index - 1);
      }
      if (index === 1 || index === 0) {
        setIndex(cities.length);
      }
      return;
    }

    if (event.code === "ArrowDown") {
      if (index === cities.length) {
        setIndex(1);
      }
      if (index >= 0 && index < cities.length) {
        setIndex(index + 1);
      }
    }
  };

  const handleResult = (value: CitiesProps) => {
    setSearchValue(value.name);
    setShowResult(false);
    props.onResult(value);
  };

  const showSearchResult = () => {
    setShowResult(true);
  };

  const hideSearchResult = () => {
    if (!isMouseIn) {
      setShowResult(false);
    }
  };

  const checkMouseIn = () => {
    setIsMouseIn(true);
  };

  const checkMouseOut = () => {
    setIsMouseIn(false);
  };

  const handleEnter = (value: CitiesProps) => {
    setEnterPressed(false);
    setIndex(0);
    setSearchValue(value.name);
    setShowResult(false);
    props.onResult(value);
  };

  const handleRessetEnter = () => {
    setEnterPressed(false);
  };

  return (
    <div
      onBlur={hideSearchResult}
      onMouseEnter={checkMouseIn}
      onMouseLeave={checkMouseOut}
    >
      <Card className={`${classes.card__align}`}>
        <input
          type="text"
          value={searchValue}
          placeholder="Search for cities"
          onKeyUp={handleKey}
          onChange={searchCities}
          onClick={showSearchResult}
        ></input>
      </Card>
      <SearchResult
        cities={cities}
        show={showResult}
        index={index}
        enterPressed={enterPressed}
        searchValue={searchValue}
        isEmpty={isEmpty}
        isLoading={isLoading}
        onRessetEnter={handleRessetEnter}
        onEnterPressed={handleEnter}
        onResult={handleResult}
      />
    </div>
  );
};

export default SearchBar;
