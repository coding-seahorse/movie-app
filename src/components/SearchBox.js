export const SearchBox = ({ inputTextHandler, inputText }) => {

    return (
        <div className="searchbar">

            <input
                type="text"
                className='form-control'

                onChange={(e) => inputTextHandler(e)}
                value={inputText}
                placeholder='Search movies' />

        </div>
    )
}
