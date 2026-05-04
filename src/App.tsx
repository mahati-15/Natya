import React, { useRef, useEffect} from 'react';
import './App.css'

function App() {

   //CAMERA

	const videoRef = useRef<HTMLVideoElement>(null);

   const getVideo = () =>{
      navigator.mediaDevices.getUserMedia({
         video:{width: 500, height: 500}
      })
      .then(stream => {
         let video = videoRef.current;
            video.srcObject = stream;
            video.play();
      })
      .catch(err =>{
         console.error(err);
      })
   }

   useEffect(() => {
      getVideo;
   }, [videoRef])


   //


	return (
		<div className='App'>
			<h1>CAMERA</h1>

			{/* make the camera work (useRef REACT HOOK) */}
			<div className="camera">
				<video ref={videoRef}></video>
			</div>
		</div>
	)
}

export default App
