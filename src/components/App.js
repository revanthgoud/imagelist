import React from "react";
import axios from "axios";
import SearchInput from "./Searchinput";
import ImageList from "./imageList";

class App extends React.Component {
  state = { images: [] }; // Changed state key from 'image' to 'images'

  onSearchSubmit = async (entry) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=42268937-f76b04bbe35c33fb96023b83c&q=${entry}&image_type=photo&pretty=true`
    );
    this.setState({ images: response.data.hits }); // Changed state key from 'image' to 'images'
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
