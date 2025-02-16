"use client";
import {
  Button,
  ButtonProps,
  Icon,
  Link,
  LinkProps,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { HiPlay } from "react-icons/hi2";
import NextLink from "next/link";
type Props = {
  active?: boolean;
} & ButtonProps &
  LinkProps;

export const ColumnLink = (props: Props) => {
  return (
    <Link
      {...props}
      as={Button}
      leftIcon={
        <Icon
          color={props.active ? "columnlink-active-fg" : "columnlink-bg"}
          as={HiPlay}
          boxSize="24px"
        />
      }
      height="36px"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      px="8px"
      border="0"
      minW="133px"
      borderRadius="18px"
      fontSize="14px"
      fontWeight="semibold"
      justifyContent="flex-start"
      bg="columnlink-bg"
      color={props.active ? "columnlink-active-fg" : "columnlink-fg"}
      _hover={{ bg: "columnlink-hover-bg", color: "columnlink-hover-fg" }}
      _active={{ bg: "columnlink-active-bg", color: "columnlink-active-fg" }}
      _focus={{
        boxShadow:
          "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
    >
      {props.children}
    </Link>
  );
};

type ColumnLinkDescriptionProps = {
  active?: boolean;
} & TextProps;

export const ColumnLinkDescription = (props: ColumnLinkDescriptionProps) => {
  return (
    <Text
      {...props}
      height="36px"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      px="8px"
      border="0"
      minW="133px"
      borderRadius="18px"
      fontSize="14px"
      fontWeight="semibold"
      justifyContent="flex-start"
      bg="columnlink-bg"
      color={props.active ? "columnlink-active-fg" : "columnlink-fg"}
      display="flex"
      alignItems="center"
    >
      {props.children}
    </Text>
  );
};
