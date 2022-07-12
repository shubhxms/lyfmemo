import React from 'react'
import { Table, Tbody, TableContainer, TableCaption} from '@chakra-ui/react'
import ToDo from './ToDo';

function ToDos(props) {

  let {todos, deleteTodo, checkTodo} = props;

  return (
    <>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Focus on one thing at a time</TableCaption>
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
              ))}
            </Tbody>
          </Table>
      </TableContainer>             
    </>
  )
}

export default ToDos
