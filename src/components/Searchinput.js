import React from "react";
//making class based component bcz, i have to use state at some point to handle the user input where the user is actually typing into the search bar.
class SearchInput extends React.Component {
  state = { entry: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.entry);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="search..."
                onChange={(event) =>
                  this.setState({ entry: event.target.value })
                }
                value={this.state.entry}
                autoFocus
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchInput;
