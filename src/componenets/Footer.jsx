import { Box,Text,Button,Input,color,Heading,HStack,Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend,AiFillGoogleCircle,AiFillAmazonCircle,AiFillFacebook,AiFillInstagram,AiFillLinkedin, AiFillGithub} from "react-icons/ai"

const Footer = () => {
  return (
  <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={'white'} >
    <Stack direction={['column','row']}>
<VStack
alignItems={"stretch"}
w={"full"}
px={'4'}
>
<Heading size="md" textTransform={'uppercase'} textAlign={['center','left']}>
    Subscribe to get updates
</Heading>
<HStack
borderBottom={"2px solid white"}
py="2">
    <Input  placeholder='Enter Email Here...' border={'none'}
    borderRadius='none'
    outline={'none'}
    focusBorderColor="none" />
    
    <Button
    p={'0'}
    colorScheme={'purple'}
    variant={'ghost'}
    borderRadius={'0 20px 20px 0'}>
        <AiOutlineSend size={"20"} />
    </Button>
</HStack>
</VStack>

<VStack 
w={'full'}
borderLeft={["none","1px solid white"]}
borderRight={["none","1px solid white"]}>

<Heading textTransform={"uppercase"} textAlign={"center"}>
    VIEWTUBE
</Heading>
<Text>ALL RIGHTS RESERVED</Text>
</VStack>
<VStack 
w={'full'}
>
<Heading size={"md"} textTransform={"uppercase"} >
Social Media
</Heading>
<HStack>
<Button variant={"link"} colorScheme={"whiteAlpha"}>
<a href="https://www.instagram.com/_naagbhairava/" target={"_blank"}>
<AiFillInstagram font-size={"2rem"} /> </a>

</Button>

<Button variant={"link"} colorScheme={"whiteAlpha"}>
<a href="linkedin.com/in/harsh-srivastav-45ab87214" target={"_blank"}>
<AiFillLinkedin font-size={"2rem"} /> </a>

</Button>
<Button variant={"link"} colorScheme={"whiteAlpha"}>
<a href="https://github.com/Hasrivastav" target={"blank"}>
<AiFillGithub font-size={"2rem"} /> </a>

</Button>
<Button variant={"link"} colorScheme={"whiteAlpha"}>
<a href="#" target={"blank"}>
<AiFillFacebook font-size={"2rem"} /> </a>

</Button>
</HStack>
</VStack>

</Stack>

  </Box>
  )
}

export default Footer