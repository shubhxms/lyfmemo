import React from 'react'
import {Tabs, Tab, TabList, TabPanels, TabPanel} from '@chakra-ui/react'
import Memos from './Memos'
import ToDos from './ToDos';
import ToReads from './ToReads';

function TabSelect(props) {
  let {memos, setMemos, todos, setTodos, toReads, setToReads, defIdx, setDefIdx} = props;
  return (
    <Tabs defaultIndex={defIdx} isFitted variant='enclosed'>

      <TabList mb='1em'>
        <Tab>To-Do</Tab>
        <Tab>Memos</Tab>
        <Tab>To-Read</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <ToDos todos={todos} setTodos={setTodos} setDefIdx={setDefIdx}/>
        </TabPanel>
        <TabPanel>
          <Memos memos={memos} setMemos={setMemos}/>
        </TabPanel>
        <TabPanel>
            <ToReads toReads={toReads} setToReads={setToReads} />
        </TabPanel>
      </TabPanels>

            
    </Tabs>
  )
}

export default TabSelect