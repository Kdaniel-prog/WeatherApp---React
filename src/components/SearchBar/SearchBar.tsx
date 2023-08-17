import React, { useState } from "react";
import Card from "../UI/Card/Card";
import "./SearchBar.css";
import CitiesProps from "./CitiesProps";
import SearchResult from "./SearchResult/SearchResult";
import SearchBarProps from "./SearchBarProps";


const SearchBar = (props: SearchBarProps) => {
    const [cities, setCities] = useState<CitiesProps[] | []>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [isEmpty, setIsEmpty] =useState(true);
    const [showResult, setShowResult] =useState(false);
    const [isMouseIn, setIsMouseIn] = useState(false);

    const tokenKey = '89430708b4e941679bd95125231108';
    const fetchData = () =>{
        
        const apiUrl = `http://api.weatherapi.com/v1/search.json?key=${tokenKey}&q=${searchValue}`;
        fetch(apiUrl)
            .then( (response) => response.json())
            .then((json)=>{
                const results = json;
                setCities(results);
                if(cities.length === 0){
                    setIsEmpty(true);
                }else{
                    setIsEmpty(false);
                }
            })
            .catch((error)=>{
                console.log(error);
            })
        setIsLoading(false);
    }

    const searchCities = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true);
        setSearchValue(event.target.value);
        if(searchValue){
            fetchData();
        }
    };

    const handleResult = (resultValue: string) =>{
        console.log(resultValue);
        setSearchValue(resultValue);
        setShowResult(false);
        const newCity = cities.find(c=> {
            if(c.name == resultValue){
                return c;
            }
        });
        
        if(newCity){
            setCities([{...newCity}]);
        }
        props.onResult(resultValue);
    }

    const showSearchResult = () => {
        setShowResult(true);
    }

    const hideSearchResult = () =>{
        if(!isMouseIn){
            setShowResult(false);
        }
        
    }

    const checkMouseIn = () =>{
        setIsMouseIn(true);
    }

    const checkMouseOut = () =>{
        setIsMouseIn(false);
    }

    return (
        <div onBlur={hideSearchResult} onMouseEnter={checkMouseIn} onMouseLeave={checkMouseOut}>
            <Card className="card--align">
                <input
                    type="text"
                    value={searchValue}
                    placeholder="Search..."
                    onChange={searchCities}
                    onClick={showSearchResult}
                ></input>
            </Card>
            {showResult 
            ?          
            <SearchResult 
            cities={cities} 
            searchValue={searchValue} 
            isEmpty={isEmpty} 
            isLoading={isLoading}
            onResult={handleResult}/> 
            : 
            <div></div>}

        </div>
    );
};

export default SearchBar;
