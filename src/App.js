import React from 'react';
import unsplash from './api/unsplash';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';


class App extends React.Component {

    state = {images: []}
    
    handleSearch = async (term) => {

        const res = await unsplash.get('search/photos', {
            params: {
                query: term
            }
           })

           this.setState({images: res.data.results})


          }

    
    render(){
        return(
            <div className="ui container">
            <SearchBar message={this.handleSearch} />
            Found: {this.state.images.length} images
            <ImageList imgList={this.state.images} />
            </div>)
    }
}


export default App;
