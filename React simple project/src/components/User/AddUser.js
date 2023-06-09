/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import Card from '../UI/Card';
import Wrapper from '../Helpers/Wrapper';
import ErrorModal from '../UI/ErrorModal';

export default function (props) {

  const [enteredUserName, setEnteredUserName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()

  const addSubmitHandler=(event)=>{
    event.preventDefault();
    if(enteredUserName.trim().length===0||enteredAge.trim().length===0){
      setError({title:"Invalid input",message:"Please enter a valid name and age (non-empty value)"})
      return;
    };
    if(+enteredAge<1){
      setError({title:"Invalid Age",message:"Please enter a valid age (>0)."})
      return;
    };
    props.onAddUser(enteredUserName,enteredAge)
    setEnteredUserName('')
    setEnteredAge('')
  }
  const userNameChangeHandler=(event)=>{
    setEnteredUserName(event.target.value)
  }
  const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value)
  }
  const errorHandler=()=>{
    setError(null)
  }

  return (
    <Wrapper>
      {error&&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler }/>}
    <Card cssClass={classes.input} >
      <form onSubmit={addSubmitHandler}>
          <label htmlFor='username'>UserName</label>
          <input id="username" type="text" value={enteredUserName}onChange={userNameChangeHandler} />
          <label htmlFor='age'>Age(Years)</label>
          <input id="age" type="number"  value={enteredAge} onChange={ageChangeHandler}/>
          <Button type='submit'>Add User</Button>
      </form>
    </Card>
    </Wrapper>


  )
}
