import './Searchbar.scss';
import searchIcon from '../../resources/search.png'
const Searchbar = (keyword) => {
    return (
        <div id='searchBar'>
            <input
                placeholder={"szukaj"}
            />
            <img src={searchIcon} alt="SEARCH" onClick={search} />
        </div>
    )
}
function search() {
    const searched = document.getElementById('searchBar').value;
    alert('Nie znaleziono: ' + searched);
}

export default Searchbar;