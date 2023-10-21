import CitiesProps from "../CitiesProps";

export default interface SearchResultProps {
    index: number,
    enterPressed: boolean,
    searchValue: string,
    isLoading: boolean,
    isEmpty: boolean,
    cities: [] | CitiesProps[],
    
    onResult(value: string): void;
    onEnterPressed(value: string): void;
}