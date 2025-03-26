import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Spacer, Text, Button, IconButton, useBreakpointValue, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure, DrawerFooter } from '@chakra-ui/react';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Determine whether to display the navbar links horizontally or vertically based on screen size
  const displayMode = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <Box bg="teal.500" p={4}>
      <Flex align="center" direction={displayMode} justify="space-between">
        {/* Left Section: LNCT UNIVERSITY */}
        <Text fontSize="2xl" fontWeight="bold" color="white">
          LNCT UNIVERSITY
        </Text>

        {/* Burger button for mobile view */}
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          display={{ base: 'block', md: 'none' }}
          onClick={onOpen}
          color="white"
          variant="ghost"
          _hover={{ bg: 'transparent' }}
        />

        {/* Center Section: Online Assessment Portal */}
        <Text fontSize="lg" color="white" textAlign="center" display={displayMode === 'column' ? 'block' : 'none'}>
          ONLINE ASSESSMENT PORTAL
        </Text>

        <Spacer />

        {/* Desktop View Links */}
        <Flex direction={displayMode} align="center" justify={displayMode === 'column' ? 'center' : 'flex-end'}>
          <Link to="/">
            <Button variant="ghost" colorScheme="whiteAlpha" _hover={{ bg: 'teal.600' }} mr={4}>
              Home
            </Button>
          </Link>
          <Link to="/help">
            <Button variant="ghost" colorScheme="whiteAlpha" _hover={{ bg: 'teal.600' }}>
              Help
            </Button>
          </Link>
        </Flex>
      </Flex>

      {/* Drawer for mobile menu */}
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          {/* Drawer header with close button */}
          <DrawerHeader>
            <Button onClick={onClose} variant="ghost" color="white" _hover={{ bg: 'transparent' }}>
              Close
            </Button>
          </DrawerHeader>
          <DrawerBody>
            <Link to="/">
              <Button w="100%" variant="ghost" colorScheme="teal" onClick={onClose} mb={4}>
                Home
              </Button>
            </Link>
            <Link to="/help">
              <Button w="100%" variant="ghost" colorScheme="teal" onClick={onClose}>
                Help
              </Button>
            </Link>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
