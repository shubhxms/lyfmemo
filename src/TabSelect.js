import React from 'react'
import {Tabs, Tab, TabList, TabPanels, TabPanel} from '@chakra-ui/react'
import Memos from './Memos'
import ToDos from './ToDos';
import ToReads from './ToReads';

function TabSelect(props) {
  let {memosMain, setMemosMain, todos, setTodos, deleteTodo, checkTodo, toReads, setToReads, defIdx, setDefIdx} = props;
  return (
    <Tabs defaultIndex={defIdx} isFitted variant='enclosed'>

      <TabList mb='1em'>
        <Tab>To-Do</Tab>
        <Tab>Memos</Tab>
        <Tab>To-Read</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <ToDos todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
        </TabPanel>
        <TabPanel>
          <Memos memosMain={memosMain} setMemosMain={setMemosMain}/>
        </TabPanel>
        <TabPanel>
            <ToReads toReads={toReads} setToReads={setToReads} />
        </TabPanel>
      </TabPanels>

            
    </Tabs>
  )
}

export default TabSelect