import React from 'react'
import {Tabs, Tab, TabList, TabPanels, TabPanel} from '@chakra-ui/react'
import Memos from './Memos'
import ToDos from './ToDos';

function TabSelect(props) {
  let {memos, setMemos, todos, setTodos} = props;
  return (
    <Tabs defaultIndex={2} isFitted variant='enclosed'>

      <TabList mb='1em'>
        <Tab>To-Do</Tab>
        <Tab>Memos</Tab>
        <Tab>Inbox</Tab>
        <Tab>To-Read</Tab>
        <Tab>Archive</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <ToDos todos={todos} setTodos={setTodos}/>
        </TabPanel>
        <TabPanel>
          <Memos memos={memos} setMemos={setMemos}/>
        </TabPanel>
        <TabPanel>
            <p>inbox!</p>
        </TabPanel>
        <TabPanel>
            <p>to read!</p>
        </TabPanel>
        <TabPanel>
            <p>archive!</p>
        </TabPanel>
      </TabPanels>

            
    </Tabs>
  )
}

export default TabSelect