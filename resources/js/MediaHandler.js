export default class MediaHandler {
    getPermissions() {
        let constraints = {
            video: false,
            audio: false
        };

        return new Promise((res, rej) => {
            console.log(navigator, 123);
            navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
                res(stream);
            }).catch(err => {
                throw new Error(`Unable to fetch stream ${err}`);
            });
        });
    }
}
