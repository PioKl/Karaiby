import '../style/App.scss';
import Header from './Header';
import HistoryBanner from './HistoryBanner';
import History from './History';
import WorthOfSeeingBanner from './WorthOfSeeingBanner';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HistoryBanner />
        <History />
        <WorthOfSeeingBanner />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
