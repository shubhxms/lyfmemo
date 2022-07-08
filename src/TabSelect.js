import React from 'react'
import {Tabs, Tab, TabList, TabPanels, TabPanel} from '@chakra-ui/react'
import Memos from './Memos'
import ToDos from './ToDos';

function TabSelect(props) {
  let {memos, setMemos, todos, setTodos, defIdx, setDefIdx} = props;
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
            <p>to read!</p>
        </TabPanel>
      </TabPanels>

            
    </Tabs>
  )
}

export default TabSelect