import CitiesProps from "../../components/SearchBar/CitiesProps";

export default interface SearchResultProps {
    onSendResult(city: CitiesProps): void
}