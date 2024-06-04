import {
  Box,
  Container,
  HStack,
  Heading,
  Link as ChakraLink,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Button,
  Select,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import {List} from "@phosphor-icons/react";
import {Link as ReactRouterLink, useNavigate} from "react-router-dom";

import Logo from "../assets/EcoAdmin.svg";
import {useState} from "react";
import axios from "axios";
import api from "../api";

export default function CreateGathering() {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [date, setDate] = useState("");

  const toast = useToast();
  const navigate = useNavigate();

  function handleCepBlur() {
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => {
        setCep(res.data.cep);
        setCity(res.data.localidade);
        setStreet(res.data.logradouro);
        setUf(res.data.uf);
      })
      .catch(() => {
        setCity("");
        setStreet("");
        setUf("");
      });
  }

  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    try {
      await api.post("/api/gathering/", {
        title: name,
        material_name: name,
        material_type: type,
        material_description: description,
        material_state: state,
        location_street: street,
        location_number: number,
        location_city: city,
        location_state: uf,
        location_country: "BR",
        date,
      });
      toast({
        title: "Agendado com sucesso!",
        status: "success",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container
      maxW="100%"
      minH="100vh"
      padding={0}
      display="flex"
      flexDirection="column"
      bgColor="#F2EFC2"
      gap={4}
    >
      <Box
        as="nav"
        bgColor="#8BBF7369"
        display="flex"
        alignItems="center"
        height={84}
        w="100%"
        flexDir="row"
        paddingInline={{base: 7, lg: 14}}
        zIndex={999}
      >
        <HStack gap={{base: 4, lg: 6}} flex={1}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<List fill="#255938" width={32} height={32} />}
              variant="outline"
              borderColor="transparent"
              _hover={{backgroundColor: "tranparent"}}
              _active={{backgroundColor: "tranparent"}}
            />
            <MenuList>
              <MenuItem as={ReactRouterLink} to="/">
                Home
              </MenuItem>
              <MenuDivider />
              <MenuItem onClick={handleLogout}>Sair</MenuItem>
            </MenuList>
          </Menu>
          <HStack>
            <Heading color="#255938" fontSize="36px">
              ECOAdmin
            </Heading>
            <Image src={Logo} w={12} h={12} />
          </HStack>
        </HStack>
      </Box>

      <VStack gap={{base: 4, lg: 6}} paddingInline={{base: 7, lg: 14}}>
        <Heading flex={1} fontSize={32} color="#255938">
          Novo agendamento
        </Heading>
        <FormControl
          as="form"
          mb={4}
          gap={6}
          display="flex"
          flexDir="column"
          maxW="1200px"
          onSubmit={handleSubmit}
        >
          <VStack gap={6} align="start">
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>
                Nome do material <sup style={{color: "red"}}>*</sup>
              </FormLabel>
              <Input
                type="text"
                placeholder="Nome"
                value={name}
                height={70}
                bg="#F2F2F2"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>
                Tipo do material <sup style={{color: "red"}}>*</sup>
              </FormLabel>
              <Select
                value={type}
                height={70}
                bg="#F2F2F2"
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option disabled value="">
                  Selecione uma opção
                </option>
                <option value="Periféricos">Periféricos</option>
                <option value="Hardware">Hardware</option>
                <option value="Outros">Outros</option>
              </Select>
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>
                Descrição do material <sup style={{color: "red"}}>*</sup>
              </FormLabel>
              <Input
                type="text"
                placeholder="Descrição"
                height={70}
                value={description}
                bg="#F2F2F2"
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>
                Estado do material <sup style={{color: "red"}}>*</sup>
              </FormLabel>
              <Select
                value={state}
                type="text"
                height={70}
                bg="#F2F2F2"
                onChange={(e) => setState(e.target.value)}
                required
              >
                <option disabled value="">
                  Selecione uma opção
                </option>
                <option value="Muito Bom">Muito Bom</option>
                <option value="Bom">Bom</option>
                <option value="Ok">Ok</option>
                <option value="Ruim">Ruim</option>
                <option value="Muito Ruim">Muito Ruim</option>
              </Select>
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>
                CEP <sup style={{color: "red"}}>*</sup>
              </FormLabel>
              <Input
                type="text"
                value={cep}
                placeholder="CEP"
                height={70}
                bg="#F2F2F2"
                onChange={(e) => setCep(e.target.value)}
                onBlur={handleCepBlur}
                maxLength={9}
                required
              />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>
                Rua <sup style={{color: "red"}}>*</sup>
              </FormLabel>
              <Input
                type="text"
                placeholder="Rua"
                value={street}
                height={70}
                bg="#F2F2F2"
                onChange={(e) => setStreet(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>
                Número <sup style={{color: "red"}}>*</sup>
              </FormLabel>
              <Input
                type="text"
                placeholder="Número"
                value={number}
                height={70}
                bg="#F2F2F2"
                required
                onChange={(e) => setNumber(e.target.value)}
              />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>
                Cidade <sup style={{color: "red"}}>*</sup>
              </FormLabel>
              <Input
                type="text"
                placeholder="Cidade"
                value={city}
                height={70}
                bg="#F2F2F2"
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>
                UF <sup style={{color: "red"}}>*</sup>
              </FormLabel>
              <Input
                type="text"
                value={uf}
                placeholder="UF"
                height={70}
                bg="#F2F2F2"
                required
                onChange={(e) => setUf(e.target.value)}
              />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>
                Data da coleta <sup style={{color: "red"}}>*</sup>
              </FormLabel>
              <Input
                type="date"
                value={date}
                placeholder="Data"
                height={70}
                bg="#F2F2F2"
                required
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </InputGroup>
          </VStack>
          <Button
            type="submit"
            w="150px"
            h="55px"
            gap={4}
            bgColor="#8BBF73"
            color="#FCFAFA"
            m="auto"
          >
            Criar
            {loading ? <Spinner /> : ""}
          </Button>
        </FormControl>
      </VStack>
    </Container>
  );
}
