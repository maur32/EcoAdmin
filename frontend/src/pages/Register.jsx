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
  Box,
  Flex,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import {Link as ReactRouterLink, useNavigate} from "react-router-dom";
import {ArrowSquareLeft, Envelope, LockSimple} from "@phosphor-icons/react";
import Logo from "../assets/EcoAdmin.svg";
import trashIcon from "../assets/trashIcon.png";
import wave from "../assets/wave.png";
import {useState} from "react";
import api from "../api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      console.log(e);
      await api.post("/api/user/register/", {username, password});
      toast({
        title: "Sua conta foi criado com sucesso!",
        status: "success",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "Erro na criação da conta",
        description: JSON.stringify(error.data),
        status: "error",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container
        maxW="100%"
        objectFit="cover"
        bgRepeat="round"
        minH="100vh"
        display="flex"
        padding={0}
        flexDirection="column"
        bgImage={{lg: wave}}
        bgSize="100%"
        bgColor="#F2EFC2"
      >
        <Box
          as="nav"
          bgColor="#8BBF7369"
          display="flex"
          height={84}
          w="100%"
          flexDir="row"
          pos="fixed"
          paddingInline={{lg: 14}}
          zIndex={999}
        >
          <Flex>
            <ChakraLink
              alignItems="center"
              display="flex"
              as={ReactRouterLink}
              to="/"
            >
              <Icon
                as={ArrowSquareLeft}
                weight="thin"
                w={{base: 12, md: 12, lg: 14}}
                h={14}
                color="#255938"
              />
            </ChakraLink>
          </Flex>
        </Box>
        <Stack
          direction={{base: "column", md: "column", lg: "row"}}
          h="100%"
          justify="space-around"
          align="center"
          flex={1}
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
              Cadastre-se!
            </Heading>
            <FormControl
              as="form"
              gap={6}
              display="flex"
              flexDir="column"
              alignItems="center"
              onSubmit={handleSubmit}
            >
              <InputGroup>
                <InputLeftElement alignContent="center" h="100%">
                  <Icon as={Envelope} weight="thin" w={6} h={6} />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Usuário"
                  height={70}
                  bg="#F2F2F2"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
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
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </InputGroup>
              <Button
                type="submit"
                gap={4}
                w="150px"
                h="55px"
                bgColor="#8BBF73"
                color="#FCFAFA"
              >
                Cadastrar
                {loading ? <Spinner /> : ""}
              </Button>
            </FormControl>
          </VStack>
        </Stack>
      </Container>
    </>
  );
}
