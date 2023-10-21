import CitiesProps from "./CitiesProps";

export default interface SearchBarProps{
    onResult(value: CitiesProps): void;
}