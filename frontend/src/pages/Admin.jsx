import {
  Box,
  Container,
  HStack,
  Heading,
  Hide,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";

import Logo from "../assets/EcoAdmin.svg";

import {Link as ReactRouterLink} from "react-router-dom";
import {List} from "@phosphor-icons/react";

export default function Admin() {
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
      <VStack>
        <iframe
          width="80%"
          height="835px"
          src="https://lookerstudio.google.com/embed/reporting/18b2fa02-9d03-438f-90e2-6b4a2b85fa4f/page/LpJ1D"
          allowfullscreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
      </VStack>
    </Container>
  );
}
