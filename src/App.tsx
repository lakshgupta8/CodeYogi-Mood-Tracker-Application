import HappyIncrementor from "./components/HappyIncrementor";
import SadIncrementor from "./components/SadIncrementor";
import HappyTracker from "./components/HappyTracker";
import SadTracker from "./components/SadTracker";

function App() {
    return (
        <div className="space-y-2 p-2">
            <HappyTracker happyCount={0} />
            <SadTracker sadCount={0} />
            <HappyIncrementor />
            <SadIncrementor />
        </div>
    );
}

export default App;