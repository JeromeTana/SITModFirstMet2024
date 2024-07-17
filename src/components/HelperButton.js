import { useState } from "react";
import RefreshIcon from "./icons/RefreshIcon";

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
                <div
                    className="fixed inset-0 flex items-center justify-center text-xl leading-9 bg-black bg-opacity-50"
                    onClick={toggleHelperModal}
                >
                    <div className="w-full p-8 m-5 bg-white rounded-3xl">
                        <h2 className="mb-5 text-2xl font-bold">วิธีการเล่น</h2>
                        <ul className="list-disc list-inside">
                            <li>
                                <p>
                                    ทุก ๆ ครั้ง จะสุ่มตัวอักษรภาษาอังกฤษ
                                    <span> A-Z </span>ขึ้นมาแสดง 1 ตัว
                                </p>
                            </li>
                            <li>
                                <p className="inline-flex">
                                    กด
                                    <RefreshIcon />
                                    เพื่อสุ่มตัวอักษรใหม่
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="px-2 py-1 font-bold rounded-lg bg-gradient-to-tr from-pink-400 to-orange-300">
                                        Special card
                                    </span> จะแสดงเครื่องหมาย <span className="font-bold">?</span> และสามารถพิมพ์ตัวอักษรอะไรก็ได้เข้าไป 1 ตัว
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HelperButton;
