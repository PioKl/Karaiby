import '../style/App.scss';
import Header from './Header';
import HistoryBanner from './HistoryBanner';
import History from './History';
import WorthOfSeeingBanner from './WorthOfSeeingBanner';
import WorthOfSeeing from './WorthOfSeeing';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HistoryBanner />
        <History />
        <WorthOfSeeingBanner />
        <WorthOfSeeing />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
