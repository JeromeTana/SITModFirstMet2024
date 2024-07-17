import { useState } from "react";

const HelperButton = () => {
    const [showHelper, setShowHelper] = useState(false);

    return (
        <div className="fixed flex justify-center mt-4 bottom-5 right-5">
            <button
                onClick={() => setShowHelper(!showHelper)}
                className="w-16 h-16 text-3xl font-bold bg-white rounded-full shadow-md"
            >
                ?
            </button>
            {showHelper && (
                <div className="mt-4">
                    <p>กดปุ่มนี้เพื่อแสดงหรือซ่อนคำใบ้</p>
                </div>
            )}
        </div>
    );
};

export default HelperButton;
