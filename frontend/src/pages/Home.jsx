import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  HStack,
  Heading,
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
  useToast,
} from "@chakra-ui/react";
import {CaretLeft, CaretRight, List, PlusCircle} from "@phosphor-icons/react";
import {Link as ReactRouterLink, useNavigate} from "react-router-dom";

import style from "./Home.module.css";

import Logo from "../assets/EcoAdmin.svg";
import {useEffect, useState} from "react";
import api from "../api";

import ReactPaginate from "react-paginate";

export default function Home({itemsPerPage}) {
  const navigate = useNavigate();

  const [gatherings, setGatherings] = useState();
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = gatherings?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(gatherings?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % gatherings?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const toast = useToast();

  useEffect(() => {
    api
      .get("/api/gathering/")
      .then((res) => res.data)
      .then((data) => {
        setGatherings(data);
        console.log(data);
      })
      .catch((err) =>
        toast({
          title: "Erro ao buscar as coletas",
          status: "error",
          description: err,
          position: "top-right",
          duration: 9000,
          isClosable: true,
        })
      );
  }, []);

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
              <MenuItem as={ReactRouterLink} to="/createGathering">
                Novo Agendamento
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
          {currentItems
            ? currentItems.map((gathering) => {
                const date = new Date(gathering.date);
                return (
                  <Card key={gathering.id}>
                    <CardHeader>
                      <ChakraLink
                        as={ReactRouterLink}
                        to={`/gathering/${gathering.id}`}
                      >
                        <Heading size="md">
                          {date.toLocaleDateString("pt-BR")}
                        </Heading>
                      </ChakraLink>
                    </CardHeader>

                    <CardBody>
                      <Stack divider={<StackDivider />} spacing="4">
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            Tipo do Material
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            {gathering.material_type}
                          </Text>
                        </Box>
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            Nome do material
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            {gathering.material_name}
                          </Text>
                        </Box>
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            Estado do material
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            {gathering.material_state}
                          </Text>
                        </Box>
                      </Stack>
                    </CardBody>
                  </Card>
                );
              })
            : "Carregando..."}
        </SimpleGrid>
        <ReactPaginate
          containerClassName={style.pagination}
          pageClassName={style.item}
          activeClassName={style.selected}
          breakClassName={style.item}
          breakLabel="..."
          nextLabel={<CaretRight weight="fill" />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<CaretLeft weight="fill" />}
          renderOnZeroPageCount={null}
        />
      </VStack>
    </Container>
  );
}
