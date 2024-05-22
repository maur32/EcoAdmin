import {
  Button,
  Container,
  FormControl,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link as ChakraLink,
  Stack,
  VStack,
} from "@chakra-ui/react";
import {Link as ReactRouterLink} from "react-router-dom";
import {Envelope, LockSimple} from "@phosphor-icons/react";
import Logo from "../assets/EcoAdmin.svg";
import trashIcon from "../assets/trashIcon.png";
import wave from "../assets/wave.png";

export default function Login() {
  return (
    <Container
      maxW="100%"
      objectFit="cover"
      bgRepeat="round"
      minH="100vh"
      padding={0}
      justifyContent="center"
      display="flex"
      flexDirection="column"
      bgImage={{lg: wave}}
      bgSize="100%"
      bgColor="#F2EFC2"
    >
      <Stack
        direction={{base: "column", md: "column", lg: "row"}}
        h="100%"
        justify="space-around"
        align="center"
      >
        <VStack>
          <HStack>
            <Heading color="#255938" fontSize="48px">
              ECOAdmin
            </Heading>
            <Image src={Logo} w={12} h={12} />
          </HStack>
          <Image src={trashIcon} w={{base: 300, md: 300, lg: 400}} />
        </VStack>
        <VStack w="330px">
          <Heading
            color={{base: "#255938", md: "#255938", lg: "#F2EFC2"}}
            fontSize={52}
            marginBottom={{base: 4, md: 4, lg: 16}}
            w="100%"
          >
            Bem Vindo !
          </Heading>
          <FormControl
            gap={6}
            display="flex"
            flexDir="column"
            alignItems="center"
          >
            <InputGroup>
              <InputLeftElement alignContent="center" h="100%">
                <Icon as={Envelope} weight="thin" w={6} h={6} />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="Email"
                height={70}
                bg="#F2F2F2"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement alignContent="center" h="100%">
                <Icon as={LockSimple} weight="thin" w={6} h={6} />
              </InputLeftElement>
              <Input
                type="password"
                placeholder="Password"
                height={70}
                bg="#F2F2F2"
              />
            </InputGroup>
            <Button w="150px" h="55px" bgColor="#8BBF73" color="#FCFAFA">
              Entrar
            </Button>
          </FormControl>
          <ChakraLink
            as={ReactRouterLink}
            to="/register"
            color={{base: "#255938", md: "#255938", lg: "#F2EFC2"}}
            fontWeight={700}
            fontSize={20}
          >
            Faça seu cadastro
          </ChakraLink>
        </VStack>
      </Stack>
    </Container>
  );
}
