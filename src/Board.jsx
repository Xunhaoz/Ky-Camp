import {
    Container, Flex, Tabs, Stat,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, StatLabel, StatNumber, StatHelpText, StatArrow, Spacer, Heading, StackDivider, Stack, TabList, TabPanels, Tab, TabPanel, Divider, Box, Grid, GridItem, Center, Text, HStack, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter
} from '@chakra-ui/react'
import LogCard from './LogCard'

export default function Home() {
    return (
        <Card>
            <CardHeader>
                <Heading size='md'>Real-Time Report</Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <LogCard />
                    <LogCard />
                </Stack>
            </CardBody>
        </Card>

    );
}
