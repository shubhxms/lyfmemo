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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Button
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import {FaInbox, FaArchive} from 'react-icons/fa';
import Input from './Input';
import TabSelect from './TabSelect';

function App() {
  
  const [memos, setMemos] = useState(['trial', 'trial2', 'trial3']);
  const [todos, setTodos] = useState([
                              {value:'test1', checked:false, uuid:0},
                              {value:'test2', checked:false, uuid:1}, 
                              {value:'test3', checked:false, uuid:2}
                            ]);
  const [defIdx, setDefIdx] = useState(1);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" py='20px'>
      <Flex minWidth='max-content' alignItems='center' justify={'space-around'} gap='2'>
          <Heading size='md' py='20px'>
            <Link a='#'>lyfMemo</Link>
          </Heading>
          <ButtonGroup>
            <Popover>
              <PopoverTrigger>
                <IconButton 
                  icon={<FaInbox/>} variant='ghost' color='current'
                />
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                    <PopoverHeader>Inbox</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Button colorScheme='blue'>Button</Button>
                    </PopoverBody>
                    <PopoverFooter>This is the footer</PopoverFooter>
                </PopoverContent>
              </Portal>   
              </Popover>
              <Popover>
              <PopoverTrigger>
                <IconButton icon={<FaArchive/>} variant='ghost' color='current'/>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                    <PopoverHeader>Archive</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Button colorScheme='blue'>Button</Button>
                    </PopoverBody>
                    <PopoverFooter>This is the footer</PopoverFooter>
                </PopoverContent>
              </Portal>   
              </Popover>
            
            <ColorModeSwitcher justifySelf="stretch" />
          </ButtonGroup>
       
      </Flex>
      <Center>
        <Grid minW={'50vw'}>
          <Input memos={memos} setMemos={setMemos} setDefIdx={setDefIdx}/>
          <br/>
          <TabSelect
          memos={memos} setMemos={setMemos}
          todos={todos} setTodos={setTodos}
          defIdx={defIdx} setDefIdx={setDefIdx}
          />
        </Grid>
      </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;

