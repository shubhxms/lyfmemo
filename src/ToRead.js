import React from 'react'
import {Tr, Td, Text, Link} from '@chakra-ui/react'
import nlp from 'compromise';

function ToRead(props) {
  let {toRead} = props;
  let url = nlp(toRead).match('#Url').text()
  console.log(url);
  if(url.slice(0,7) !== 'https://'){
    url = 'https://' + url
    console.log(url);
  }
  return (
    <>
      <Tr>
        <Td>
          <Text>
            <Link href={url}>{toRead}</Link>
          </Text>
        </Td>
      </Tr>
    </>
    )
}

export default ToRead