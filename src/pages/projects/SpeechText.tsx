import { useState, useEffect } from "react";

const SpeechToText = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      className={`flex justify-center items-center h-full ${
        fadeIn ? "opacity-100 duration-1000" : "opacity-0 duration-500"
      } transition-opacity mb-32`}
    >
      <div className="text-black p-8 rounded-md shadow-lg max-w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold mb-6">Speech To Text Project</h1>
          {/* <Link to="" target="_blank"> */}
          <div className="relative h-36 w-36 transition-transform transform hover:scale-110">
            <div className="h-full w-full rounded-full shadow-2xl overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}voice.svg`}
                className="h-full w-full object-contain mx-auto my-auto p-4 mt-1"
                alt="Voice Logo"
              />
            </div>
          </div>
          {/* </Link> */}
        </div>

        <div className="grid gap-8">
          <div className="speech-container p-8 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Transforming Speech into Text</h1>
            <p className="text-gray-700 mb-8">
              I created a speech-to-text model designed to convert spoken language into written text. The project
              originated from my curiosity with TensorFlow, an open-source machine learning library, and the potential
              applications of natural language processing in everyday tasks.
            </p>
            <div className="feature-section mb-8 block items-center md:flex lg:flex xl:flex">
              <div>
                <h2 className="text-2xl font-bold mb-4">Speech Recognition Accuracy</h2>
                <p className="text-gray-700">
                  Achieving high accuracy in speech recognition was my primary focus. The model has been trained on
                  diverse datasets, incorporating different speaking styles to ensure robust performance across various
                  scenarios.
                </p>
                <p className="text-gray-700">
                  Leveraging TensorFlow's powerful deep learning capabilities, the model excels in accurately
                  transcribing spoken words, making it a versatile solution for transcription services, voice-controlled
                  applications, and more.
                </p>
              </div>
            </div>
            <div className="technical-details-section mb-8">
              <h2 className="text-2xl font-bold mb-4">Technical Details:</h2>
              <ul className="list-disc">
                <li className="text-gray-700">
                  <strong>Deep Learning Architecture:</strong> It is powered by a deep neural network architecture,
                  utilizing recurrent neural networks (RNNs) and long short-term memory (LSTM) cells for effective
                  sequence-to-sequence learning.
                </li>
                <li className="text-gray-700">
                  <strong>TensorFlow Integration:</strong> TensorFlow, an integral part of the project, provided the
                  tools and infrastructure for implementing the deep learning model, making it easier to experiment and
                  optimize the speech recognition system.
                </li>
                <li className="text-gray-700">
                  <strong>Training Data:</strong> The model has been trained on a diverse dataset comprising audio
                  recordings from various sources, ensuring adaptability to different speaking patterns.
                </li>
                <li className="text-gray-700">
                  <strong>Speech Preprocessing:</strong> Advanced preprocessing techniques are applied to input audio
                  data, including noise reduction, feature extraction, and normalization, enhancing the model's ability
                  to handle varying audio conditions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeechToText;
