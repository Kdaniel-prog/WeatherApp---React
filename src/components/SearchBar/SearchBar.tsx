import React, { useState } from "react";
import Card from "../UI/Card/Card";
import "./SearchBar.css";
import CitiesProps from "./CitiesProps";
import SearchResult from "./SearchResult/SearchResult";
import SearchBarProps from "./SearchBarProps";
import TOKEN from "../../api/apiWeatherProps/Token";


const SearchBar = (props: SearchBarProps) => {
    const [cities, setCities] = useState<CitiesProps[] | []>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [isEmpty, setIsEmpty] =useState(true);
    const [showResult, setShowResult] =useState(false);
    const [isMouseIn, setIsMouseIn] = useState(false);
    const [apiUrl, setApiUrl] = useState('');
    const [index, setIndex] = useState(0);
    const [enterPressed, setEnterPressed] = useState(false);

     const fetchData = async () => {
        try {
            setApiUrl(`http://api.weatherapi.com/v1/search.json?key=${TOKEN}&q=${searchValue}`);
            setIsLoading(true);
            const response = await fetch(apiUrl);
            const data = await response.json();
            setCities(data);
            cities.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
            setIsLoading(false);
            if(!isEmpty){
                setShowResult(true);
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    const searchCities = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true);
        setSearchValue(event.target.value);
        if(searchValue){
            fetchData();
        }
    };
    
    const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const keys =["ArrowUp", "ArrowDown", "Enter"];
        if(!keys.includes(event.code)){
            return;
        }

        if(event.code === 'Enter'){
            event.preventDefault();
            setEnterPressed(true);
            return;
        }
        
        if(event.code === 'ArrowUp'){
            if(index > 1 && index <= cities.length ){
                setIndex(index - 1);
            }
            if(index === 1 || index === 0){
                setIndex(5);
            }
            return;
        }

        if(event.code === 'ArrowDown'){
            if(index === cities.length){
                setIndex(1);
            }
            if(index >= 0 && index < cities.length){
                setIndex(index + 1);
            }
        }
    }

    const handleResult = (value: string) =>{
        const newCity = cities.find(c=> {
            if(c.name == value){
                return c;
            }
        });
        
        if(newCity){
            setCities([{...newCity}]);
        }

        setSearchValue(value);
        setShowResult(false);
        props.onResult(value);
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

    const handleEnter = (value:string) =>{
        const newCity = cities.find(c=> {
            if(c.name == value){
                return c;
            }
        });
        
        if(newCity){
            setCities([{...newCity}]);
        }

        setEnterPressed(false);
        setIndex(0);
        setSearchValue(value);
        setShowResult(false);
        props.onResult(value);
    }

    const handleRessetEnter = () =>{
        setEnterPressed(false);
    }

    return (
        <div onBlur={hideSearchResult} onMouseEnter={checkMouseIn} onMouseLeave={checkMouseOut}>
            <Card className="card--align">
                <input
                    type="text"
                    value={searchValue}
                    placeholder="Search..."
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
                onResult={handleResult}/>
        </div>
    );
};

export default SearchBar;
