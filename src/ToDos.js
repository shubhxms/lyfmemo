import React from 'react'
import { Table, Tbody, TableContainer} from '@chakra-ui/react'
import ToDo from './ToDo';

function ToDos(props) {

  let {todos, setTodos} = props;

  let deleteTodo = (uuid) => {
    console.log(typeof(uuid))
    const arr = [];
    for (let todo in todos){
      console.log("asd")
      console.log(todo)
      if (todos[todo].uuid !== uuid){
        console.log("hererer")
        arr.push(todos[todo]) 
      }  
    }
    console.log(arr);
    setTodos(arr);
    console.log(todos);
  }

  let checkTodo = (uuid) => {
    let arr = [...todos]
    for (let todo of arr){
      if (todo.uuid === uuid){
        todo.checked = !todo.checked;
      }
    }
    console.log(arr)
    setTodos(arr);
    console.log(todos)
  };


  return (
    <div>
      <TableContainer>
            <Table variant='simple'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Tbody>
                  {todos.map(todo => (
                    <ToDo 
                      key={todo.uuid}
                      uuid={todo.uuid}
                      todo={todo.value}
                      deleteTodo={deleteTodo} 
                      checked={todo.checked}
                      checkTodo={checkTodo}
                    />
                    // handleTodoChange={handleTodoChange}
                    ))}
                </Tbody>
              </Table>
        </TableContainer>
      
                
    </div>
  )
}

export default ToDos
//           <Checkbox defaultValue={false} checked={false} key={todos.indexOf(todo)} onChange={(e) => handleTodoChange(e, todo)}>
// {/* <Text>/{todo}</Text> */}
// </Checkbox>
// 