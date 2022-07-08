import React from 'react'
import {Tr, Td, Text,Checkbox, IconButton} from '@chakra-ui/react'
import {FaTrash} from 'react-icons/fa';

function ToDo(props) {

    let {todo, uuid, deleteTodo, checked, checkTodo} = props;

  return (
    <>
      <Tr>
        <Td>
          <Checkbox defaultValue={checked}
            onChange={
              () => (checkTodo(uuid))
            }
          >
            <Text>{todo}</Text>
          </Checkbox>
          {checked && <IconButton 
            icon={<FaTrash/>} size={'sm'} variant='ghost' color='current'
            onClick={() => deleteTodo(uuid)}
            />}
        </Td>
      </Tr>
    </>
    // onChange={(e) => handleTodoChange(e, todo)}

  )
}

export default ToDo