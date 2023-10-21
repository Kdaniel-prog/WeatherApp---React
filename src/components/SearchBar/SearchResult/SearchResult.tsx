import React from "react";
import SearchResultProps from "./SearchResultProps";
import "./SearchResult.css";
import CitiesProps from "../CitiesProps";

const SearchResult = (props: SearchResultProps) => {
  const selectedIndex = props.index - 1;

  const handleClick = (e: React.MouseEvent<HTMLOptionElement>) => {
    const target = e.target as HTMLOptionElement;
    const [selectedCity, selectedCountry, selectedRegio] = target.text.split('|').map(item => item.trim());
    const selected: CitiesProps | undefined = props.cities.find(city => {
       // Check if selectedRegio is undefined before comparing it with city.region
      if (selectedRegio === undefined) {
        return city.name === selectedCity && city.country === selectedCountry && city?.region.length === 0;
      } else {
        return city.name === selectedCity && city.country === selectedCountry && city.region === selectedRegio;
      }
    })
    if(selected){
      props.onResult(selected);
    }
  };
  
  if(!props.show){
    return <></>
  }

  if (props.isLoading) {
    return (
      <div className="result-wrapper">
        <div className="search-result-wrapper">
          <p className="loading-text">Loading...</p>
        </div>
      </div>
    );
  }

  if (props.isEmpty || props.cities.length === 0) {
    return (
      <div className="result-wrapper">
        <div className="search-result-wrapper">
          <p className="loading-text">No result</p>
        </div>
      </div>
    );
  }
  
  if (props.enterPressed && selectedIndex < 0) {
    props.onRessetEnter();
  }
  
  if (props.enterPressed && props.cities.length > 0 && selectedIndex >= 0) {
    const selected: CitiesProps = props?.cities[selectedIndex];
    console.log(selected)
    if(selected){
        props.onEnterPressed(selected);
    }
  }

  return (
    <div className="result-wrapper">
      <div className="search-result-wrapper">
        {props.cities.map((item, index) => {
          return (
            <option
              key={index}
              className={`search-result ${selectedIndex === index ? "hover" : ""}`}
              onClick={handleClick}
            >
              {`${item.name} | ${item.country} | ${item.region}`}
            </option>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
