import './App.css';
import Progress from './components/Progress';

const App = () => {
  const bars = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (
    <>
      <h1>ProgressBar</h1>
      {bars.map((bar) => (
        <Progress key={bar} progress={bar} />
      ))}
    </>
  );
};

export default App;
