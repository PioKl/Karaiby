import '../style/App.scss';
import Header from './Header';
import HistoryBanner from './HistoryBanner';
import History from './History';
import WorthOfSeeingBanner from './WorthOfSeeingBanner';
import WorthOfSeeing from './WorthOfSeeing';
import WorthOfSeeingPart2 from './WorthOfSeeingPart2';
import WorthOfSeeingContextProvider from "../contexts/WorthOfSeeingContext";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HistoryBanner />
        <History />
        <WorthOfSeeingBanner />
        <WorthOfSeeingContextProvider>
          <WorthOfSeeing />
          <WorthOfSeeingPart2 />
        </WorthOfSeeingContextProvider>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
