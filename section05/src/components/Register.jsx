import React, { useRef, useState } from 'react';

export default function Register() {
  const [value, setValue] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });

  const refObj = useRef();
  const inputRef = useRef();

  const { name, birth, country, bio } = value;

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (name === '') {
      console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <input
          ref={inputRef}
          type="text"
          name="name"
          value={name}
          onChange={onChange}
        />
        {name}
      </div>
      <div>
        <input type="date" name="birth" value={birth} onChange={onChange} />
        {birth}
      </div>
      <div>
        <select name="country" id="" value={country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {country}
      </div>
      <div>
        <textarea name="bio" id="" value={bio} onChange={onChange}></textarea>
        {bio}
      </div>
      <button onClick={onSubmit}>제출</button>
    </>
  );
}
