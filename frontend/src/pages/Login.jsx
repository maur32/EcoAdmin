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
  Spinner,
  useToast,
} from "@chakra-ui/react";
import {Link as ReactRouterLink, useNavigate} from "react-router-dom";
import {Envelope, LockSimple} from "@phosphor-icons/react";
import Logo from "../assets/EcoAdmin.svg";
import trashIcon from "../assets/trashIcon.png";
import wave from "../assets/wave.png";
import {useState} from "react";
import api from "../api";
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../constants";

export default function Login() {
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
      const res = await api.post("/api/token/", {username, password});
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      toast({
        title: "Bem vindo!",
        status: "success",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Erro no login",
        status: "error",
        description: error.response.data.detail,
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
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
                placeholder="Username"
                height={70}
                bg="#F2F2F2"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
            <Button
              w="150px"
              type="submit"
              gap={4}
              h="55px"
              bgColor="#8BBF73"
              color="#FCFAFA"
            >
              Entrar
              {loading ? <Spinner /> : ""}
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
