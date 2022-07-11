import React from 'react'
import {
    Table,
    Tbody,
    TableContainer,
  } from '@chakra-ui/react'
  import Memo from './Memo';

function ToReads(props) {
    let {toReads} = props;
  return (
    <div>
        <TableContainer>
            <Table variant='simple'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Tbody>
                    {toReads.map(memo => (
                        <Memo key={toReads.indexOf(memo)} memo={memo}/>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default ToReads







