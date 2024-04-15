import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import voiceIcon from "@/assets/projects/voice.svg";

const SpeechToText = () => {
  return (
    <div className="flex flex-col space-y-12 sm:space-y-24 lg:space-y-12 bg-gray-200">
      <Navbar isHome={false} isEducation={false} isProjects={true} />

      <div className="lg:p-24 p-8">
        <FadeIn>
          <div className="flex flex-col text-black p-8 rounded-2xl shadow-lg bg-white mt-2 sm:mt-[-2rem]">
            <div className="flex justify-between items-center">
              <h1 className="text-xl sm:text-4xl font-bold mb-6">Speech To Text Project</h1>
              {/* <a href="" target="blank"> */}
              <div className="w-28 h-22 sm:w-36 sm:h-36 transition-transform transform hover:scale-105 shadow-2xl rounded-full flex items-center justify-center">
                <img src={voiceIcon} className="w-24 sm:w-32 p-4 mt-2" alt="Voice Logo" />
              </div>
              {/* </a> */}
            </div>

            <div className="mt-6 sm:mt-0">
              <div className="mb-8 items-center lg:flex lg:space-x-4 space-y-4">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold mb-4">Transforming Speech into Text</h1>
                  <p className="text-sm sm:text-xl">
                    The speech-to-text model created in this project utilizes TensorFlow, a powerful machine learning
                    library known for its ability to manage extensive datasets and perform complex computations
                    effectively. This model is designed to convert spoken language into written text, a fundamental
                    component of natural language processing. The technology has diverse practical applications
                    including transcription services, voice assistants, and accessibility features, making it
                    particularly significant in today's digital landscape.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">Speech Recognition Accuracy</h2>
                  <p className="text-sm sm:text-xl">
                    Achieving high accuracy in speech recognition was my primary focus. The model has been trained on
                    diverse datasets, incorporating different speaking styles to ensure robust performance across
                    various scenarios. Leveraging TensorFlow's powerful deep learning capabilities, the model excels in
                    accurately transcribing spoken words, making it a versatile solution for transcription services,
                    voice-controlled applications, and more.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Technical Details:</h2>
                <ul className="list-disc">
                  <li className="text-sm sm:text-lg">
                    <strong>Deep Learning Architecture:</strong> It is powered by a deep neural network architecture,
                    utilizing recurrent neural networks (RNNs) and long short-term memory (LSTM) cells for effective
                    sequence-to-sequence learning.
                  </li>
                  <li className="text-sm sm:text-lg">
                    <strong>TensorFlow Integration:</strong> TensorFlow, an integral part of the project, provided the
                    tools and infrastructure for implementing the deep learning model, making it easier to experiment
                    and optimize the speech recognition system.
                  </li>
                  <li className="text-sm sm:text-lg">
                    <strong>Training Data:</strong> The model has been trained on a diverse dataset comprising audio
                    recordings from various sources, ensuring adaptability to different speaking patterns.
                  </li>
                  <li className="text-sm sm:text-lg">
                    <strong>Speech Preprocessing:</strong> Advanced preprocessing techniques are applied to input audio
                    data, including noise reduction, feature extraction, and normalization, enhancing the model's
                    ability to handle varying audio conditions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="h-12 sm:h-4"></div>
      <Footer />
    </div>
  );
};

export default SpeechToText;
