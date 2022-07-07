import React from 'react'
import {
    Table,
    Tbody,
    TableContainer,
  } from '@chakra-ui/react'
  import Memo from './Memo';

function Memos(props) {
    let {memos} = props;
  return (
    <div>
        <TableContainer>
            <Table variant='simple'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Tbody>
                    {memos.map(memo => (
                        <Memo key={memos.indexOf(memo)} memo={memo}/>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Memos







