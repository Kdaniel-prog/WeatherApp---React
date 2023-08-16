import CitiesProps from "../CitiesProps";

export default interface SearchResultProps {
    searchValue: string,
    isLoading: boolean,
    isEmpty: boolean,
    cities: [] | CitiesProps[],
    
    onResult(value: string): void;
}