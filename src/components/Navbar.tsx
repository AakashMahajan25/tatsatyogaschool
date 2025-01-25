"use client";
import React from "react";
import {
  Flex,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  IconButton,
  DrawerFooter,
} from "@chakra-ui/react";
import logo from "@/assets/Logo-transparent.png";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* Navbar */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        px={6}
        py={{ base: 2, lg: 3 }}
        bg="#F67D49"
        color="white"
        position="relative"
        flexDir="row-reverse"
      // Add animation class
      >
        {/* Hamburger for Mobile */}
        <IconButton
          display={{ base: "block", lg: "none" }}
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="unstyled"
        />

        {/* Logo */}
        <Image
          src={logo}
          alt="logo"
          width={1000}
          className=" w-10 lg:max-w-none fade-animation-hero-logo sm:hidden"
        />

        {/* Links for Desktop */}
        <Flex
          display={{ base: "none", lg: "flex" }}
          align="center"
          gap={8}
          fontSize="lg"
          w={"full"}
          justifyContent={"space-around"}
        >
          <Text cursor="pointer" className="fade-animation">
            <Link href={'/'}>
              Home</Link>
          </Text>
          <Text cursor="pointer" className="fade-animation">
            <Link href={'/aboutus'}>
              About Us</Link>
          </Text>
          <Text cursor="pointer" className="fade-animation">
            Yoga Retreat
          </Text>
          <Image
            src={logo}
            alt="logo"
            width={1000}
            className="w-8 lg:w-20 mx-[150px]  fade-animation"
          />
          <Text cursor="pointer" className="fade-animation">
            Courses
          </Text>
          <Text cursor="pointer" className="fade-animation">
            Contact US
          </Text>
          <Text cursor="pointer" className="fade-animation">
            Book Now
          </Text>
        </Flex>
      </Flex>

      {/* Drawer for Mobile Navbar */}
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          bg="#F67D49"
          color="white"
          className="rounded-tr-[50px] rounded-tl-[50px]"
        >
          <DrawerBody py={10}>
            <Flex direction="column" align="center" gap={6} fontSize="lg">
              <Text cursor="pointer" onClick={onClose}>
                <Link href={'/'}>
                  Home</Link>
              </Text>
              <Text cursor="pointer" onClick={onClose}>
                <Link href={'/aboutus'}>
                  About Us</Link>
              </Text>
              <Text cursor="pointer" onClick={onClose}>
                Yoga Retreat
              </Text>
              <Text cursor="pointer" onClick={onClose}>
                Courses
              </Text>
              <Text cursor="pointer" onClick={onClose}>
                Contact Us
              </Text>
              <Text cursor="pointer" onClick={onClose}>
                Book Now
              </Text>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Flex
              alignItems={"self-start"}
              flexDir={"column"}
              justifyContent={"start"}
              className="w-full block"
              gap={2}
            >
              <Flex alignItems={"center"} gap={4} fontSize={"sm"}>
                <FaLocationDot />
                <Text>Rishikesh, India</Text>
              </Flex>
              <Flex alignItems={"center"} gap={4} fontSize={"sm"}>
                <IoMdCall />
                <Text>Rishikesh, India</Text>
              </Flex>
              <Flex alignItems={"center"} gap={4} fontSize={"sm"}>
                <IoMail />
                <Text>Rishikesh, India</Text>
              </Flex>
            </Flex>
          </DrawerFooter>
          <Flex className="bloxk w-full flex justify-center gap-4 py-4">
            <FaInstagram className="text-4xl  rounded-full p-1" />
            <FaInstagram className="text-4xl  rounded-full p-1" />
            <FaInstagram className="text-4xl  rounded-full p-1" />
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
