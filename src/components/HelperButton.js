import { useState } from "react";
import HelperModal from "./HelperModal";

const HelperButton = () => {
    const [showHelperModal, setShowHelper] = useState(false);
    const toggleHelperModal = () => {
        setShowHelper(!showHelperModal);
    };
    return (
        <div className="fixed flex justify-center mt-4 bottom-5 right-5">
            <button
                onClick={() => setShowHelper(!showHelperModal)}
                className="w-16 h-16 text-3xl font-bold bg-white rounded-full shadow-md"
            >
                ?
            </button>
            {showHelperModal && (
                <HelperModal toggleHelperModal={toggleHelperModal} />
            )}
        </div>
    );
};

export default HelperButton;
