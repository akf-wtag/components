import './Input.css';
import useDebounce from './use-debounce';

const Input = ({
  placeholder,
  size,
  variant,
  preIcon,
  postIcon,
  isReadOnly,
  isLoading,
  debounceEffect,
  value,
  onChange,
}) => {
  const debouncedValue = useDebounce(value, debounceEffect);

  const generateClassName = (prop, element) => {
    if (prop) return `input-with-${element}`;
    return '';
  };

  return (
    <div className='input-container'>
      {preIcon && (
        <span className={`icon preIcon icon-${size}`}>{preIcon}</span>
      )}
      {postIcon && (
        <span className={`icon postIcon icon-${size}`}>{postIcon}</span>
      )}
      {isLoading && <span className='input-with-loading'></span>}

      <input
        type='text'
        placeholder={placeholder}
        className={`${size} ${variant} 
        ${generateClassName(preIcon, 'preIcon')}
        ${generateClassName(postIcon, 'postIcon')}`}
        readOnly={isReadOnly}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
