import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MediaHandler from '../MediaHandler';

export default class App extends Component {
    constructor(a) {
        super(a);
        this.state = {
            hasMedia: false,
            otherUserId: null
        };
        this.MediaHandler = new MediaHandler();
    }
    componentWillMount() {
        this.MediaHandler.getPermissions()
            .then((stream) => {
                this.setState({
                    hasMedia: true
                });

                try {
                    this.myVideo.srcObject = stream;
                } catch (e) {
                    this.myVideo.src = URL.createObjectURL(stream);
                }

                this.myVideo.play();
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Video chat app!</div>
                            <div className="card-body">

                                <div className="video-container">
                                    <video className="my-video" ref={(ref) => {this.myVideo = ref;}}></video>
                                    <video className="user-video" ref={(ref) => {this.userVideo = ref;}}></video>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
