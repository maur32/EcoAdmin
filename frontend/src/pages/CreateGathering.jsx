import {
  Box,
  Container,
  HStack,
  Heading,
  Hide,
  Link as ChakraLink,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  Image,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Button,
  Select,
} from "@chakra-ui/react";
import {List} from "@phosphor-icons/react";
import {Link as ReactRouterLink} from "react-router-dom";

import Logo from "../assets/EcoAdmin.svg";

export default function CreateGathering() {
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
              <MenuItem as={ReactRouterLink} to="/Home">
                Home
              </MenuItem>
              <MenuDivider />
              <MenuItem>Sair</MenuItem>
            </MenuList>
          </Menu>
          <HStack>
            <Heading color="#255938" fontSize="36px">
              ECOAdmin
            </Heading>
            <Image src={Logo} w={12} h={12} />
          </HStack>
        </HStack>
        <HStack>
          <Hide below="md">
            <Text color="#255938" fontSize={20} fontWeight="bold">
              Bem vindo, Usuário!
            </Text>
          </Hide>
        </HStack>
      </Box>

      <VStack gap={{base: 4, lg: 6}} paddingInline={{base: 7, lg: 14}}>
        <Heading flex={1} fontSize={32} color="#255938">
          Novo agendamento
        </Heading>
        <FormControl
          mb={4}
          gap={6}
          display="flex"
          flexDir="column"
          maxW="1200px"
        >
          <VStack gap={6} align="start">
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>Nome do material</FormLabel>
              <Input type="text" placeholder="Nome" height={70} bg="#F2F2F2" />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>Tipo do material</FormLabel>
              <Input type="text" placeholder="Tipo" height={70} bg="#F2F2F2" />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>Descrição do material</FormLabel>
              <Input
                type="text"
                placeholder="Descrição"
                height={70}
                bg="#F2F2F2"
              />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>Estado do material</FormLabel>
              <Select type="text" height={70} bg="#F2F2F2">
                <option selected disabled value="">
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
              <FormLabel mb={1}>CEP</FormLabel>
              <Input type="text" placeholder="CEP" height={70} bg="#F2F2F2" />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>Rua</FormLabel>
              <Input type="text" placeholder="Rua" height={70} bg="#F2F2F2" />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>Número</FormLabel>
              <Input
                type="text"
                placeholder="Número"
                height={70}
                bg="#F2F2F2"
              />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>Cidade</FormLabel>
              <Input
                type="text"
                placeholder="Cidade"
                height={70}
                bg="#F2F2F2"
              />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>UF</FormLabel>
              <Input type="text" placeholder="UF" height={70} bg="#F2F2F2" />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel mb={1}>Data da coleta</FormLabel>
              <Input type="date" placeholder="Data" height={70} bg="#F2F2F2" />
            </InputGroup>
          </VStack>
          <ChakraLink as={ReactRouterLink} to="/home" m="auto">
            <Button w="150px" h="55px" bgColor="#8BBF73" color="#FCFAFA">
              Criar
            </Button>
          </ChakraLink>
        </FormControl>
      </VStack>
    </Container>
  );
}
