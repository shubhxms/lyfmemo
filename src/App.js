import React, {useState, useEffect} from 'react';
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
  Portal
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import {FaInbox, FaArchive, FaQuestion} from 'react-icons/fa';
import Input from './Input';
import TabSelect from './TabSelect';
import compromiseFunc from './compromise';
import {getLocalStorage, setLocalStorage} from './syncLocalStorage'

function App() {
  
  const [memos, setMemos] = useState(['abcd']);
  const [todos, setTodos] = useState([]);
  const [memosMain, setMemosMain] = useState([]);
  const [toReads, setToReads] = useState([]);
  const [archives, setArchives] = useState([]);
  const [inbox, setInbox] = useState([]);
  const [defIdx, setDefIdx] = useState(1);

//   let allMemos = [];
// {value:'test1', checked:false, uuid:0},
// {value:'test2', checked:false, uuid:1}, 
// {value:'test3', checked:false, uuid:2}

  useEffect(() => {
	let allMemos = getLocalStorage();
	setTodos(allMemos[0])
	setMemosMain(allMemos[1])
	setToReads(allMemos[2])
  }, [todos, memosMain, toReads])



  const handleNewMemo = (memo) => {
	setMemos([memo, ...memos]);
	let type = compromiseFunc(memo)
	  // switch case -> add memo to a list based on type
	switch (type) {
		case 0:
			setLocalStorage(
				[{value:memo, checked:false, uuid:uuidv4()}, ...todos],
				memosMain, toReads);
			setTodos([{value:memo, checked:false, uuid:uuidv4()}, ...todos])
			break;
		case 2:
			setLocalStorage(todos, memosMain, [memo, ...toReads]);
			setToReads([memo, ...toReads])
			break;
		default:
			setLocalStorage(todos, [memo, ...memosMain], toReads);
			setMemosMain([memo, ...memosMain])
			break;
	  }
  }

  const deleteTodo = (uuid) => {
	console.log(typeof(uuid))
    const arr = [];
    for (let todo in todos){
      console.log("asd")
      console.log(todo)
      if (todos[todo].uuid !== uuid){
        console.log("hererer")
        arr.push(todos[todo]) 
      }  
    }
	setLocalStorage(arr, memosMain, toReads);
    setTodos(arr);
    console.log(todos);
  }

  let checkTodo = (uuid) => {
    let arr = [...todos]
    for (let todo of arr){
      if (todo.uuid === uuid){
        todo.checked = !todo.checked;
      }
    }
    console.log(arr);
	setLocalStorage(arr, memosMain, toReads);
    setTodos(arr);
    console.log(todos)
  };

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
		  memosMain={memosMain} setMemosMain={setMemosMain}
		  todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} checkTodo={checkTodo}
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

