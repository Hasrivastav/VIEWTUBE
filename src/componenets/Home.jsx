import {Box,Container,Stack,Heading,Text,Image} from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

// making a object  of all the porperties which is  to be used in the heading
const headingoptions ={
  pos:'absolute',
  left:'50%',
  top:'50%',
  transform:'translate(-50%,-50%)',
  textTransform:'uppercase',
  p:'4'
  
};

const Home = () => {
  

  return <Box>
    <MyCarousel />
    <Container maxW={'container.xl'} minH={'100vh'} p="16">
<Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={"2px solid"} m="auto">
  Services
</Heading>

<Stack h="full" p={"4"} alignItems={"center"} direction={["column",'row']}>
  <Image src={img5} w={['40','400']}  filter={'hue-rotate(-130deg)'} />
  <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, assumenda nemo, ab dignissimos sint sunt eaque similique numquam hic facere delectus doloremque saepe. Modi, quisquam voluptas. Optio, laudantium non. Esse autem doloribus sed possimus minima, in et quisquam adipisci aperiam cumque commodi rerum, non fugit molestiae ducimus provident. Voluptate, veniam distinctio dolorem magni maxime alias mollitia dicta. Quam nam placeat amet porro dicta molestias animi incidunt laudantium, labore voluptatem nisi dolore tempora quisquam, nostrum reprehenderit, officiis inventore cupiditate commodi similique soluta maiores minus fugiat quod. Minus earum amet consequuntur excepturi voluptate eius omnis, consectetur voluptatum dignissimos molestiae saepe esse odit.
  </Text>
</Stack>
</Container>
</Box>
  
  ;
  
};


const MyCarousel = ()=>(
  <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>

<Box w="full" h={'100vh'}>
 
  <Image src={img1} />
  <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingoptions}>
    Watch the future</Heading>

</Box>
<Box w="full" h={'100vh'}>
 
  <Image src={img2} />
  <Heading bgColor={"whiteAlpha.900"} color={"black"} 
  {...headingoptions} >
    Furture is gaming</Heading>

</Box>
<Box w="full" h={'100vh'}>
 
  <Image src={img3} />
  <Heading bgColor={"whiteAlpha.600"} color={"black"}  {...headingoptions}>
    Gaming on console
  </Heading>

</Box>
<Box w="full" h={'100vh'}>
 
  <Image src={img4} />
  <Heading bgColor={"whiteAlpha.600"} color={"black"}  {...headingoptions}>
    Night life is cool
   </Heading>

</Box>

  </Carousel>
);
export default Home;