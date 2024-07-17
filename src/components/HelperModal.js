import RefreshIcon from "./icons/RefreshIcon";

const HelperModal = (props) => {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center text-xl leading-9 bg-black bg-opacity-50"
            onClick={props.toggleHelperModal}
        >
            <div className="w-full max-w-screen-sm p-8 m-5 bg-white rounded-3xl">
                <h2 className="mb-5 text-2xl font-bold">วิธีการเล่น</h2>
                <ul className="list-disc list-inside">
                    <li>
                        ทุก ๆ ครั้ง จะสุ่มตัวอักษรภาษาอังกฤษ A-Z ขึ้นมาแสดง 1
                        ตัว
                    </li>
                    <li>
                        <p className="inline-flex">
                            กด
                            <RefreshIcon />
                            เพื่อสุ่มตัวอักษรใหม่
                        </p>
                    </li>
                    <li>
                        <span className="px-2 py-1 font-bold rounded-lg bg-gradient-to-tr from-pink-400 to-orange-300">
                            Special card
                        </span>{" "}
                        จะแสดงเครื่องหมาย <span className="font-bold">?</span>{" "}
                        และสามารถพิมพ์ตัวอักษรอะไรก็ได้เข้าไป 1 ตัว
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HelperModal;
