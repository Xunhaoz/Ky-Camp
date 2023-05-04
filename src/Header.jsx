import {
    Container, Tabs, TabList, TabPanels, Tab, TabPanel, Divider, Box, Grid, GridItem, Center, Text, HStack, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter
} from '@chakra-ui/react'
import { EmailIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Home() {
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={2} h='100%'>
            <GridItem colSpan={1} h='100%'>
                <Center h='100%'>
                    <Text fontSize='3xl'>Sports Lottery</Text>
                </Center>
            </GridItem>
            <GridItem colStart={5} colEnd={6} h='100%'>
                <Center h='100%'>
                    <HStack h='80%'>
                        <Divider orientation='vertical' />
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                            賽事表
                        </Button>
                        <Divider orientation='vertical' />
                        <ConnectWallet theme="dark" />
                    </HStack>
                </Center>
            </GridItem>
        </Grid>
    );
}
