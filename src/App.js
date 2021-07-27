import './App.css';
import { useState } from 'react';
import Input from './components/Input/Input';
import { FaRegSave } from 'react-icons/fa';

function App() {
  const [value, setValue] = useState('');

  return (
    <div style={{ width: '300px' }}>
      <Input
        placeholder='type here..'
        size='md'
        variant='outline'
        preIcon={<FaRegSave />}
        postIcon={''}
        isLoading={false}
        isReadOnly={false}
        debounceEffect={2000}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default App;
