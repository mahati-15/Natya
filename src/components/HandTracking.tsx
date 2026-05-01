import React, { useEffect } from 'react'
import {HandLandmarker, FilesetResolver} from '@mediapipe/tasks-vision';

const HandTracking: React.FC = () => {

    async function createHandLandmarker() {
        const vision = await FilesetResolver.forVisionTasks(
            // path/to/wasm/root
            "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
        );

        const landmarker =await HandLandmarker.createFromOptions(vision, {
            baseOptions: {
                modelAssetPath: 
                    "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task"
            },
            //delegate: "GPU",
            runningMode: "VIDEO",
            numHands: 1,
            minHandDetectionConfidence: 0.5,
            minHandPresenceConfidence: 0.5,
            minTrackingConfidence: 0.5
        });

        console.log("HandLandmarker Stats:", landmarker);

    }

    useEffect(() => {
        createHandLandmarker();
    }, []);

    return (
        <div>Hand Tracking</div>
    );



    

};

export default HandTracking;