import React from 'react'
import {Tr, Td, Text} from '@chakra-ui/react'

function Memo(props) {
    let {memo} = props;
  return (
     <Tr>
        <Td>
            <Text>{memo}</Text>
        </Td>
      </Tr>
    

  )
}

export default Memo