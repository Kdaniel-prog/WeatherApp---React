import React from "react";

import SearchResultProps from "./SearchResultProps";
import classes from "./SearchResult.module.css";
import CitiesProps from "../CitiesProps";

const SearchResult = (props: SearchResultProps) => {
  const selectedIndex = props.index - 1;

  const handleClick = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLUListElement;
    const content = target?.textContent ? target.textContent : '';
    const [selectedCity, selectedCountry, selectedRegio] = content.split('|').map(item => item.trim());
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
      <div className={`${classes.result__wrapper}`}>
        <div className={`${classes.search__result__wrapper}`}>
          <p className={`${classes.loading__text}`}>Loading...</p>
        </div>
      </div>
    );
  }

  if (props.isEmpty || props.cities.length === 0) {
    return (
      <div className={`${classes.result__wrapper}`}>
        <div className={`${classes.search__result__wrapper}`}>
          <p className={`${classes.loading__text}`}>No result</p>
        </div>
      </div>
    );
  }
  
  if (props.enterPressed && selectedIndex < 0) {
    props.onRessetEnter();
  }
  
  if (props.enterPressed && props.cities.length > 0 && selectedIndex >= 0) {
    const selected: CitiesProps = props?.cities[selectedIndex];
    if(selected){
        props.onEnterPressed(selected);
    }
  }

  return (
    <div className={`${classes.result__wrapper}`}>
      <div className={`${classes.search__result__wrapper}`}>
        {props.cities.map((item, index) => {
          return (
            <ul
              key={index}
              className={`${classes.search__result} ${selectedIndex === index ? classes.hover : ""} ${index % 2 === 0 ? classes.darker : ""}`}
              onClick={handleClick}
            >
              {`${item.name} | ${item.country} | ${item.region}`}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
