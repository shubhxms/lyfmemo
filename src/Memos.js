import React from 'react'
import {Table, Tbody, TableContainer} from '@chakra-ui/react'
import Memo from './Memo';

function Memos(props) {
    let {memosMain} = props;
  return (
    <>
      <TableContainer>
        <Table variant='simple'>
          <Tbody>
            {memosMain.map(memo => (
              <Memo key={memosMain.indexOf(memo)} memo={memo}/>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Memos







