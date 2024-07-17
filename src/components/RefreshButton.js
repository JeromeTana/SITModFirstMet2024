import RefreshIcon from "./icons/RefreshIcon"; // Import the RefreshIcon component

const RefreshButton = (props) => {
    return (
        <button className="button" onClick={props.handleRefresh}>
            <RefreshIcon className="refresh-icon" />
        </button>
    );
};

export default RefreshButton;
