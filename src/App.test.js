import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

test('App renderes correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.app-container')).toHaveLength(1);
});
