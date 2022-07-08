import React, {useState} from 'react'

import
{
    ButtonGroup,
    Button,
    Flex,
    FormControl,
    Textarea
}
 from "@chakra-ui/react";


 
 function Input(props) {

    let {memos, setMemos, setDefIdx} = props;
    const [liveMemoText, setLiveMemoText] = useState('');
    const handleChange = (e) => {
      setDefIdx(1)
      setLiveMemoText(e.target.value)
    };

    

   return (
     <div>
        <FormControl isRequired>
            <Textarea
            autoFocus
            maxW='40vw'
            size={'lg'} placeholder='enter your memo!'
            onChange={(e) => handleChange(e)}
            value={liveMemoText}
            />
            

            <Flex justify='end' maxW='45vw'>
            <ButtonGroup variant='outline' spacing='4' py='5px'>
              <Button
              colorScheme='blue' size='sm'
              onClick={() => (
                liveMemoText !== '' && (setMemos([liveMemoText, ...memos]),
                setLiveMemoText('')
                  ))}
              > Save </Button>
              <Button onClick={() => setLiveMemoText('')} size='sm'>Cancel</Button>
            </ButtonGroup>
            </Flex>
          </FormControl>
     </div>
   )
 }
 
 export default Input