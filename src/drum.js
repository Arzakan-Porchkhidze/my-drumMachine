import React from 'react';

class Drumpad extends React.Component {
    constructor(props){
        super(props);
        this.clickBtn = this.clickBtn.bind(this);
    }
    clickBtn() {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.displayChange(this.props.id);
    }
    catchKeyPress = (event) => {
        if(event.keyCode === this.props.keyTrigger.charCodeAt()) {
          this.audio.play();
          this.audio.currentTime = 0;
          this.props.displayChange(this.props.id);
        }
    }
    
    
    render(){
        return (
            <div className ='drum-pad'
                id={this.props.id}
                onClick={this.clickBtn}
                onKeyDown={document.addEventListener('keydown', this.catchKeyPress)}>
                <audio 
                    className='clip' 
                    src={this.props.src} 
                    id={this.props.keyTrigger}
                    ref={ref => this.audio = ref}>
                </audio>
                {this.props.keyTrigger}
            </div>
        );
    }
}
export default Drumpad;