import React, {useState} from 'react';

import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Heading,
  Flex,
  Center,
  Link,
  IconButton,
  ButtonGroup,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import {FaRegSun} from 'react-icons/fa';
import Input from './Input';
import TabSelect from './TabSelect';

function App() {
  
  const [memos, setMemos] = useState(['trial', 'trial2', 'trial3']);
  const [todos, setTodos] = useState(['test1', 'test2', 'test3']);


  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" py='20px'>
      <Flex minWidth='max-content' alignItems='center' justify={'space-around'} gap='2'>
          <Heading size='md' py='20px'>
            <Link a='#'>lyfMemo</Link>
          </Heading>
          <ButtonGroup>
            <IconButton icon={FaRegSun} variant='ghost' color='current'/>
            <ColorModeSwitcher justifySelf="stretch" />
          </ButtonGroup>
       
      </Flex>
      <Center>
        <Grid minW={'50vw'}>
          <Input memos={memos} setMemos={setMemos}/>
          <br/>
          <TabSelect memos={memos} setMemos={setMemos} todos={todos} setTodos={setTodos}/>
        </Grid>
      </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;

