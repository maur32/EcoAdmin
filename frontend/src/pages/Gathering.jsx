import {
  Box,
  Container,
  HStack,
  Heading,
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
  Select,
  useToast,
} from "@chakra-ui/react";
import {List} from "@phosphor-icons/react";
import {
  Link as ReactRouterLink,
  useNavigate,
  useParams,
} from "react-router-dom";

import Logo from "../assets/EcoAdmin.svg";
import {useEffect, useState} from "react";
import api from "../api";

export default function Gathering() {
  const [gathering, setGathering] = useState("");
  const [gatheringDate, setGatheringDate] = useState("");

  const toast = useToast();
  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(() => {
    api
      .get(`/api/gathering/${id}/`)
      .then((res) => {
        setGathering(res.data);
        const date = new Date(res.data.date);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        setGatheringDate(`${year}-${month}-${day}`);
      })
      .catch(() => {
        toast({
          title: "Erro ao buscar o agendamento",
          status: "error",
          description: "Não foi possível encontrar o agendamento",
          position: "top-right",
          duration: 9000,
          isClosable: true,
        });
        navigate("/");
      });
  }, [gathering, id, navigate, toast]);

  function handleLogout() {
    localStorage.clear();
    navigate("/login");
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
          Agendamento - {gathering.id}
        </Heading>
        <FormControl
          as="form"
          mb={4}
          gap={6}
          display="flex"
          flexDir="column"
          maxW="1200px"
        >
          <VStack gap={6} align="start">
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>
                Nome do material <sup style={{color: "red"}}>*</sup>
              </FormLabel>
              <Input
                type="text"
                disabled
                placeholder="Nome"
                value={gathering.material_name}
                height={70}
                bg="#F2F2F2"
                required
              />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>
                Tipo do material <sup style={{color: "red"}}>*</sup>
              </FormLabel>
              <Select
                disabled
                value={gathering.material_type}
                height={70}
                bg="#F2F2F2"
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
                disabled
                height={70}
                value={gathering.material_description}
                bg="#F2F2F2"
                required
              />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>
                Estado do material <sup style={{color: "red"}}>*</sup>
              </FormLabel>
              <Select
                value={gathering.material_state}
                disabled
                type="text"
                height={70}
                bg="#F2F2F2"
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
                Rua <sup style={{color: "red"}}>*</sup>
              </FormLabel>
              <Input
                type="text"
                placeholder="Rua"
                disabled
                value={gathering.location_street}
                height={70}
                bg="#F2F2F2"
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
                disabled
                value={gathering.location_number}
                height={70}
                bg="#F2F2F2"
                required
              />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>
                Cidade <sup style={{color: "red"}}>*</sup>
              </FormLabel>
              <Input
                type="text"
                placeholder="Cidade"
                value={gathering.location_city}
                disabled
                height={70}
                bg="#F2F2F2"
                required
              />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>
                UF <sup style={{color: "red"}}>*</sup>
              </FormLabel>
              <Input
                type="text"
                value={gathering.location_state}
                disabled
                placeholder="UF"
                height={70}
                bg="#F2F2F2"
                required
              />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>
                Data da coleta <sup style={{color: "red"}}>*</sup>
              </FormLabel>
              <Input
                type="date"
                value={gatheringDate}
                disabled
                placeholder="Data"
                height={70}
                bg="#F2F2F2"
                required
              />
            </InputGroup>
          </VStack>
        </FormControl>
      </VStack>
    </Container>
  );
}
