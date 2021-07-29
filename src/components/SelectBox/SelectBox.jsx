import { v4 as uuid } from 'uuid';
import './SelectBox.scss';
import { useState, useRef } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { FiSmile } from 'react-icons/fi';
import PropTypes from 'prop-types';

const SelectBox = ({ label, placeholder, size, width, options }) => {
  const generateClassName = (prop, propValue) => {
    if (propValue) return `${prop}-${propValue}`;
    return '';
  };

  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => setText(e.target.value);

  const handleVisible = (e) => {
    setIsVisible((prev) => {
      if (!prev) inputRef.current.focus();
      return !prev;
    });
  };

  const filteredOptions = options.filter(
    (option) =>
      option.label.toLowerCase().includes(text.toLowerCase()) ||
      option.description.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div>
      <label htmlFor='selectBox-container'>{label}</label>

      <div
        className={`selectBox-container
      ${generateClassName('size', size)}
      ${generateClassName('width', width)} `}
        id='selectBox-container'
        // onBlur={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
      >
        {isVisible ? (
          <ul className={generateClassName('ul-size', size)}>
            {filteredOptions.length === 0 ? (
              <li>No options.</li>
            ) : (
              filteredOptions.map((info) => {
                const { label, description } = info;
                return (
                  <li
                    key={uuid()}
                    onClick={() => {
                      setText(label);
                      inputRef.current.focus();
                    }}
                  >
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
            value={text}
            onChange={handleChange}
            autoComplete='off'
            className={`${generateClassName('input-size', size)}`}
            ref={inputRef}
          />
          {isVisible ? (
            <AiFillCaretUp className='caret-down' onClick={handleVisible} />
          ) : (
            <AiFillCaretDown className='caret-down' onClick={handleVisible} />
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
