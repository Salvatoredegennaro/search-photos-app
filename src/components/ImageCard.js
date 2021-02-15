import React from 'react';


class ImageCard extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)

        this.state = {spans: 0}
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpan)
    }

    setSpan = () =>{
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10)

        this.setState({spans : spans})
    }


    render(){
        const { urls, description} = this.props.messCard
        

        return(
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>)}
}







export default ImageCard;