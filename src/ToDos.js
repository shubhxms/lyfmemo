import React from 'react'
import {Text, Checkbox, CheckboxGroup} from '@chakra-ui/react'
import ToDo from './ToDo';
// the checkbox and text thing was a separate component, added it here instead, ignore that

function ToDos(props) {

  let {todos, setTodos} = props;

  let handleTodoChange = (e, todo) => {
    if(!e.target.checked) return;
    if(!e.target.checked) return;
    const arr = [...todos];
    console.log(todos.indexOf(todo))
    arr.splice(todos.indexOf(todo), 1)
    console.log(arr)
    setTodos(arr)
  }

  return (
    <div>
        
                    <CheckboxGroup>
                        {todos.map(todo => (
                            <Checkbox defaultValue={false} checked={false}  onChange={(e) => handleTodoChange(e, todo)}>
                            <Text>{todo}</Text>
                            </Checkbox>
                            // <ToDo key={todos.indexOf(todo)} todo={todo} handleTodoChange={handleTodoChange}/>
                        ))}
                    </CheckboxGroup>
                
    </div>
  )
}

export default ToDos