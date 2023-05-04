import {
  Container, Tabs, TabList, TabPanels, Tab, TabPanel, Divider, Box, Grid, GridItem, Center, Text, HStack, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter
} from '@chakra-ui/react'
import { EmailIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { ConnectWallet } from "@thirdweb-dev/react";
import Board from "./Board";
import Header from './Header';

export default function Home() {
  return (
    <Box>
      <Grid
        templateAreas={`"header" "main" "footer"`}
        gridTemplateRows={'100px 1fr 100px'}
        gridTemplateColumns={'1fr'}
        h='100vh'
        gap='5'
        fontWeight={'bold'}
      >
        <GridItem  area={'header'}>
          <Header />
        </GridItem>

        <GridItem  area={'main'}>
          <Container maxW='80%'>
            <Card mt={'20px'} h='80%'>
              <CardHeader>
                <Tabs isFitted variant='enclosed'>
                  <TabList mb='1em'>
                    <Tab>熱門</Tab>
                    <Tab>籃球</Tab>
                    <Tab>足球</Tab>
                    <Tab>棒球</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Board />
                    </TabPanel>
                    <TabPanel>
                      <Board />
                    </TabPanel>
                    <TabPanel>
                      <Board />
                    </TabPanel>
                    <TabPanel>
                      <Board />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </CardHeader>
            </Card>
          </Container>
        </GridItem>
        <GridItem  area={'footer'}>
        </GridItem>
      </Grid>

    </Box>
  );
}
