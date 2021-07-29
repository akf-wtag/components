import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelectBox from './SelectBox/SelectBox';

Enzyme.configure({ adapter: new Adapter() });

test('SelectBox receives label prop correctly', () => {
  const wrapper = shallow(<SelectBox label='ab' />);
  expect(wrapper.find('label').text()).toEqual('ab');
});

test('SelectBox receives placeholder prop correctly', () => {
  const wrapper = shallow(<SelectBox placeholder='ab' />);
  expect(wrapper.find('input').props().placeholder).toEqual('ab');
});

test('SelectBox receives size prop correctly', () => {
  const wrapper = shallow(<SelectBox size='ab' />);
  expect(wrapper.find('.selectBox-container').hasClass('size-ab')).toBeTruthy();
});

test('SelectBox receives width prop correctly', () => {
  const wrapper = shallow(<SelectBox width='ab' />);
  expect(
    wrapper.find('.selectBox-container').hasClass('width-ab')
  ).toBeTruthy();
});

const options = [{ label: 'Item 01', value: '01', description: 'ab' }];
test('SelectBox receives options prop correctly', () => {
  const wrapper = shallow(<SelectBox options={options} />);
  wrapper.find('.selectBox-container').simulate('focus');
  wrapper.find('input').simulate('change', { target: { value: 'Item' } });
  expect(wrapper.find('li').children().length).toBe(2);
});
