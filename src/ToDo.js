import React from 'react'
import {Tr, Td, Text,Checkbox, Input} from '@chakra-ui/react'

function ToDo(props) {

    let {todo, handleTodoChange} = props;

  return (
    <>

        <Checkbox defaultValue={false}  onChange={(e) => handleTodoChange(e, todo)}>
        <Text>{todo}</Text>
        </Checkbox>

    </>

  )
}

export default ToDo