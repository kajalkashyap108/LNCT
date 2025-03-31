import React from 'react';
import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import lnctpic from '../assets/onlineexams.png';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';

export default function About() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Navbar />
      
      <Flex 
        flex={1}
        direction={{ base: 'column', md: 'row' }} // Stack on mobile, row on desktop
        padding="20px"
        maxWidth="1200px"
        margin="0 auto"
        alignItems="center"
        gap={{ md: 26 }} // Adds space between columns on desktop
      >
        {/* Left Column - Text */}
        <Box flex={1} padding="20px">
          <Heading as="h2" size="xl" mb={4}>
            About Us
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={4}>
          LNCT Online Assessment System (LNCT OAS) is a modern platform for conducting secure and efficient online exams. It offers automated evaluation, real-time analytics, and an intuitive user interface for both students and educators. Built with React.js, Node.js, and MongoDB, it ensures scalability and security. With LNCT OAS, institutions can digitize their exams, making assessments faster, fairer, and more reliable
          </Text>
          <Button backgroundColor="skyblue" color="white" _hover={{ backgroundColor: "blue.400" }}>
            Learn More
          </Button>
        </Box>

        {/* Right Column - Image */}
        <Box flex={1.5} padding="20px">
          <img 
            src={lnctpic} 
            alt="About Us" 
            style={{ 
              width: '100%', 
              height: '400px',
              maxWidth: '600px',
              borderRadius: '12px',
              objectFit: 'cover',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0',
            }} 
          />
        </Box>
      </Flex>
      
      <Footer />
    </div>
  );
}
