import { v4 as uuid } from 'uuid';
import './SelectBox.scss';
import { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { FiSmile } from 'react-icons/fi';
import PropTypes from 'prop-types';

const SelectBox = ({ label, placeholder, size, width, options }) => {
  const generateClassName = (prop, propValue) => {
    if (propValue) return `${prop}-${propValue}`;
    return '';
  };

  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleVisible = (e) => {
    if (e.button === 0) setIsVisible((prev) => !prev);
  };

  const filteredOptions = options.filter(
    (option) =>
      option.label.toLowerCase().includes(value.toLowerCase()) ||
      option.description.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div>
      <label htmlFor='selectBox-container'>{label}</label>

      <div
        className={`selectBox-container
      ${generateClassName('size', size)}
      ${generateClassName('width', width)} `}
        id='selectBox-container'
        onBlur={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
      >
        {isVisible ? (
          <ul>
            {filteredOptions.length == 0 ? (
              <li>No options.</li>
            ) : (
              filteredOptions.map((info) => {
                const { label, value, description } = info;
                return (
                  <li key={uuid()} value={value}>
                    <FiSmile
                      className={`smile ${generateClassName(
                        'smile-width',
                        width
                      )}`}
                    />
                    <div
                      className={`option-content ${generateClassName(
                        'option-content-width',
                        width
                      )}`}
                    >
                      <div
                        className={`option-title ${generateClassName(
                          'option-title-width',
                          width
                        )}`}
                      >
                        {label}
                      </div>
                      <div
                        className={`option-description ${generateClassName(
                          'option-description-width',
                          width
                        )}`}
                      >
                        {description}
                      </div>
                    </div>
                  </li>
                );
              })
            )}
          </ul>
        ) : (
          ''
        )}
        <div className='input-container'>
          <input
            type='text'
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            autoComplete='off'
            className={`${generateClassName('input-size', size)}`}
          />
          {isVisible ? (
            <AiFillCaretUp className='caret-down' onMouseDown={handleVisible} />
          ) : (
            <AiFillCaretDown
              className='caret-down'
              onMouseDown={handleVisible}
            />
          )}
        </div>
      </div>
    </div>
  );
};

SelectBox.defaultProps = {
  label: '',
  placeholder: '',
  size: 'tiny',
  width: 'tiny',
  options: [{ label: '', value: '', description: '' }],
};

SelectBox.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default SelectBox;
