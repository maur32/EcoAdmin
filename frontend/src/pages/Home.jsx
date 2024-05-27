import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  HStack,
  Heading,
  Hide,
  Icon,
  IconButton,
  Image,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import {List, PlusCircle} from "@phosphor-icons/react";
import {Link as ReactRouterLink} from "react-router-dom";

import Logo from "../assets/EcoAdmin.svg";

const gatherings = [
  {
    date: "28/06/2024",
    material: "Teclado",
    materialType: "Periféricos",
    state: "Excelente",
    id: "1",
  },
  {
    date: "29/06/2024",
    material: "Mouse",
    materialType: "Periféricos",
    state: "Ruim",
    id: "2",
  },
  {
    date: "28/07/2024",
    material: "Monitor",
    materialType: "Periféricos",
    state: "Muito Ruim",
    id: "3",
  },
  {
    date: "28/07/2024",
    material: "Placa Mãe B450M",
    materialType: "Hardware",
    state: "Bom",
    id: "4",
  },
];

export default function Home() {
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
              <MenuItem as={ReactRouterLink} to="/createGathering">
                Novo Agendamento
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
      <VStack
        align="start"
        gap={{base: 4, lg: 6}}
        paddingInline={{base: 7, lg: 14}}
      >
        <HStack w="100%">
          <Heading flex={1} fontSize={32} color="#255938">
            Meus agendamentos
          </Heading>
          <ChakraLink as={ReactRouterLink} to="/createGathering">
            <Icon as={PlusCircle} cursor="pointer" w={8} h={8} fill="#255938" />
          </ChakraLink>
        </HStack>

        <SimpleGrid w="100%" minChildWidth="300px" spacing="40px">
          {gatherings
            ? gatherings.map((gathering) => (
                <Card key={gathering.id}>
                  <CardHeader>
                    <Heading size="md">{gathering.date}</Heading>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Tipo do Material
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          {gathering.materialType}
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Nome do material
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          {gathering.material}
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Estado do material
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          {gathering.state}
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              ))
            : "Erro"}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
