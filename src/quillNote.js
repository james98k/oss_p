import React, { useRef, useState } from 'react';
import { Quill } from 'react-quill';
import UserList from './UserList';
// import CreateUser from './CreateUser';
import './quillNote.css';


const CreateUser = ({ username, email, onChange, onCreate }) => {
    return (
      <div>
        <input
          name="username"
          placeholder="계정명"
          onChange={onChange}
          value={username}
        />
        <input
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={email}
        />
       
        <button onClick={onCreate}>등록</button>
      </div>
    );
  };
  


function QuillNote() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
  return (
    <>
    <div className = "user-wrapper">
        <div className = "">
            <h1>This is user registeration</h1>
            <h3>register your name and email!</h3>
        </div>
    </div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default QuillNote;
