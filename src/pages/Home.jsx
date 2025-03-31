import React from 'react'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'
import {Card, Heading } from "@chakra-ui/react"

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Navbar />
      
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '20px 0'
      }}>
        <div style={{
          width: '50%',
          margin: '0 auto'
        }}>
          <Card.Root size="md" margin='80px 20px 14px 20px'>
            <Card.Header>
              <Heading size="md"> Card - md</Heading>
            </Card.Header>
            <Card.Body color="fg.muted">
              This is the card body. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Card.Body>
          </Card.Root>

          <Card.Root size="md" margin='14px 20px'>
            <Card.Header>
              <Heading size="md"> Card - md</Heading>
            </Card.Header>
            <Card.Body color="fg.muted">
              This is the card body. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Card.Body>
          </Card.Root>

          <Card.Root size="md" margin='14px 20px'>
            <Card.Header>
              <Heading size="md"> Card - md</Heading>
            </Card.Header>
            <Card.Body color="fg.muted">
              This is the card body. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Card.Body>
          </Card.Root>

          <Card.Root size="md" margin='14px 20px'>
            <Card.Header>
              <Heading size="md"> Card - md</Heading>
            </Card.Header>
            <Card.Body color="fg.muted">
              This is the card body. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Card.Body>
          </Card.Root>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}