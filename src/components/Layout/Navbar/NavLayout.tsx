import {
  HStack,
  Icon,
  IconButton,
  useBreakpointValue,
  ButtonGroup,
  Container,
  useColorMode,
  StackDivider,
  Divider,
  Box,
  Flex,
} from "@chakra-ui/react";
import { StarknetLogo } from "@ui/Logo/StarknetLogo";
import Link from "next/link";

import {
  HiBars3,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineXMark,
} from "react-icons/hi2";
import { SearchInput } from "./SearchInput";

type NavLayoutProps = {
  items?: React.ReactNode;
  onClickMenu?: VoidFunction;
  onToggleMode?: VoidFunction;
  isMenuOpen: boolean;
  menuButtonRef?: React.RefObject<HTMLButtonElement>;
  languageSwitcher?: React.ReactElement;
};

export const NavLayout = (props: NavLayoutProps) => {
  const { onClickMenu, isMenuOpen, menuButtonRef } = props;
  const MenuIcon = isMenuOpen ? HiOutlineXMark : HiBars3;
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container py={{ base: "4", lg: "8" }}>
      <HStack spacing="4" justify="space-between">
        <Link href="/">
          <StarknetLogo />
        </Link>
        {isDesktop && (
          <>
            <ButtonGroup variant="link" spacing="18px">
              {props.items}
            </ButtonGroup>
          </>
        )}

        <HStack spacing={6}>
          <SearchInput />
          {isDesktop && (
            <>
              <IconButton
                variant="ghost"
                icon={
                  colorMode === "light" ? (
                    <Icon as={HiOutlineMoon} fontSize="xl" />
                  ) : (
                    <Icon as={HiOutlineSun} fontSize="xl" />
                  )
                }
                aria-label="Toggle color mode"
                onClick={toggleColorMode}
              />
            </>
          )}

          {isDesktop && (
            <>
              <Box
                w="1px"
                bg="nav-footer-br"
                h="30px"
                position="relative"
                left="-13px"
                marginLeft="20px"
              />
              {props.languageSwitcher}
            </>
          )}

          {!isDesktop && (
            <IconButton
              ref={menuButtonRef}
              variant="ghost"
              icon={<Icon as={MenuIcon} fontSize="2xl" />}
              aria-label="Open Menu"
              onClick={onClickMenu}
            />
          )}
        </HStack>
      </HStack>
    </Container>
  );
};
