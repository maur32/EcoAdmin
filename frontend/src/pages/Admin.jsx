import {
  Box,
  Container,
  HStack,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";

import Logo from "../assets/EcoAdmin.svg";

import {Navigate, useNavigate} from "react-router-dom";
import {List} from "@phosphor-icons/react";
import {useEffect, useState} from "react";
import {ACCESS_TOKEN} from "../constants";
import {jwtDecode} from "jwt-decode";

export default function Admin() {
  const navigate = useNavigate();
  const [isSuperUser, setIsSuperUser] = useState(true);

  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }

  const admin = () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    const decoded = jwtDecode(token);
    console.log(isSuperUser);
    setIsSuperUser(decoded.is_superuser);
  };

  useEffect(() => {
    admin();
  });
  return isSuperUser ? (
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
      <VStack>
        <iframe
          width="80%"
          height="80%"
          style={{position: "absolute"}}
          src="https://lookerstudio.google.com/embed/reporting/6eb76719-b1b9-4013-aaa3-fa5024c52487/page/kMJ1D"
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
      </VStack>
    </Container>
  ) : (
    <Navigate to="/" />
  );
}
