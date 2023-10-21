import React from "react";
import SearchResultProps from "./SearchResultProps";
import "./SearchResult.css";

const SearchResult = (props: SearchResultProps) => {
  const selectedIndex = props.index - 1;

  const handleClick = (e: React.MouseEvent<HTMLOptionElement>) => {
    const target = e.target as HTMLOptionElement;
    const value = target.text;
    props.onResult(value);
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
    const value = props?.cities[selectedIndex]?.name;
    if(value){
        props.onEnterPressed(value);
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
              {item.name}
            </option>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
