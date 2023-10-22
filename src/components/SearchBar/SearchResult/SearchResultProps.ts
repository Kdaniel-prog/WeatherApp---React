import CitiesProps from "../CitiesProps";

export default interface SearchResultProps {
    index: number,
    enterPressed: boolean,
    searchValue: string,
    isLoading: boolean,
    isEmpty: boolean,
    show: boolean,
    cities: [] | CitiesProps[],
    
    onResult(value: CitiesProps): void;
    onEnterPressed(value: CitiesProps): void;
    onRessetEnter(): void
}