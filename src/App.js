import './App.css';
import SelectBox from './components/SelectBox/SelectBox';
import options from './components/SelectBox/options';

function App() {
  return (
    <div
      className='app-container'
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '100px',
      }}
    >
      <SelectBox
        label='Choose an item:'
        placeholder='Select...'
        size='small'
        width='small'
        options={options}
      />
    </div>
  );
}

export default App;
