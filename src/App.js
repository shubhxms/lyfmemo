import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid'
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
import {FaInbox, FaArchive, FaQuestion} from 'react-icons/fa';
import Input from './Input';
import TabSelect from './TabSelect';
import compromiseFunc from './compromise';

function App() {
  
  const [memos, setMemos] = useState(['trial', 'trial2', 'trial3']);
  const [todos, setTodos] = useState([
							  {value:'test1', checked:false, uuid:0},
							  {value:'test2', checked:false, uuid:1}, 
							  {value:'test3', checked:false, uuid:2}
							]);
  const [memosMain, setMemosMain] = useState(['trial', 'trial2', 'trial3']);
  const [toReads, setToReads] = useState([]);
  const [archives, setArchives] = useState([]);
  const [inbox, setInbox] = useState([]);
  const [defIdx, setDefIdx] = useState(1);



  const handleNewMemo = (memo) => {
	setMemos([memo, ...memos]);
	let type = compromiseFunc(memo)
	  // switch case -> add memo to a list based on type
	switch (type) {
		case 0:
			setTodos([{value:memo, checked:false, uuid:uuidv4()}, ...todos])
			break;
		case 2:
			setToReads([memo, ...toReads])
			break;
		default:
			setMemosMain([memo, ...memosMain])
			break;
	  }
  }



  return (
	<ChakraProvider theme={theme}>
	  <Box textAlign="center" fontSize="xl" py='20px'>
	  <Flex minWidth='max-content' alignItems='center' justify={'space-around'} gap='2'>
		<ButtonGroup>
		<Heading size='md' py='10px'>
			<Link href='#'>lyfMemo</Link>
		  </Heading>
		<Popover>
			  <PopoverTrigger>
				<IconButton icon={<FaQuestion/>} variant='ghost' color='current'/>
			  </PopoverTrigger>
			  <Portal>
				<PopoverContent>
				  <PopoverArrow />
					<PopoverHeader>About</PopoverHeader>
					<PopoverCloseButton />
					<PopoverBody>
						lyfmemo-v0.1
						<br/>
						HOW-TO & ABOUT COMING SOON!
					</PopoverBody>
					<PopoverFooter>
						Made with 〈〉& ❤ by <Link isExternal href='https://twitter.com/shubhxms'>@shubhxms</Link>
					</PopoverFooter>
				</PopoverContent>
			  </Portal>   
			  </Popover>
		</ButtonGroup>
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
					Coming Soon
					<PopoverFooter>🤫</PopoverFooter>
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
					Coming Soon
					</PopoverBody>
					<PopoverFooter>🤫</PopoverFooter>
				</PopoverContent>
			  </Portal>   
			  </Popover>
			
			<ColorModeSwitcher justifySelf="stretch" />
		  </ButtonGroup>
	   
	  </Flex>
	  <Center>
		<Grid minW={'50vw'}>
		  <Input
		  memos={memosMain} setMemos={setMemosMain} 
		  handleNewMemo={handleNewMemo}
		  setDefIdx={setDefIdx}
		  />
		  <br/>
		  <TabSelect
		  memos={memosMain} setMemos={setMemosMain}
		  todos={todos} setTodos={setTodos}
		  toReads={toReads} setToReads={setToReads}
		  defIdx={defIdx} setDefIdx={setDefIdx}
		  />
		</Grid>
	  </Center>
	  </Box>
	</ChakraProvider>
  );
}

export default App;

