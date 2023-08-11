import Card from "../UI/Card/Card";
import './SearchBar.css';

const SearchBar = () =>{

    return(
        <Card className="card--align">
            <form>
                <input type='text' placeholder='Search...'></input>
                <button type="submit" disabled>Search</button>
            </form>
        </Card>
    )
};

export default SearchBar;