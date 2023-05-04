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

export default function Home() {
    return (
        <Box>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h='100%' >
                    <Card>
                        <CardBody>
                            <Heading size='md'>
                                <Flex>
                                    <Box >
                                        洛杉磯湖人
                                    </Box>
                                    <Spacer />
                                    <Box >
                                        <Stat>
                                            <StatNumber>345,670</StatNumber>
                                            <StatHelpText>
                                                <StatArrow type='increase' />
                                                23.36%
                                            </StatHelpText>
                                        </Stat>
                                    </Box>
                                </Flex>
                            </Heading>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem w='100%' h='100%' >
                    <Card>
                        <CardBody>
                            <Heading size='md'>
                                <Flex>
                                    <Box >
                                        洛杉磯湖人
                                    </Box>
                                    <Spacer />
                                    <Box >
                                        <Stat>
                                            <StatNumber>345,670</StatNumber>
                                            <StatHelpText>
                                                <StatArrow type='decrease' />
                                                23.36%
                                            </StatHelpText>
                                        </Stat>
                                    </Box>
                                </Flex>
                            </Heading>
                        </CardBody>
                    </Card>
                </GridItem>
            </Grid>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>即時下注紀錄</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>地址</Th>
                            <Th>標的</Th>
                            <Th isNumeric>下注金額</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>0x60403579e6513de31b16F3Adba8097fcc6A8146c</Td>
                            <Td>雷霆</Td>
                            <Td isNumeric>25.4 USD</Td>
                        </Tr>
                        <Tr>
                            <Td>0x60403579e6513de31b16F3Adba8097fcc6A8146c</Td>
                            <Td>雷霆</Td>
                            <Td isNumeric>25.4 USD</Td>
                        </Tr>
                        <Tr>
                            <Td>0x60403579e6513de31b16F3Adba8097fcc6A8146c</Td>
                            <Td>雷霆</Td>
                            <Td isNumeric>25.4 USD</Td>
                        </Tr>
                        <Tr>
                            <Td>0x60403579e6513de31b16F3Adba8097fcc6A8146c</Td>
                            <Td>雷霆</Td>
                            <Td isNumeric>25.4 USD</Td>
                        </Tr>
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>地址</Th>
                            <Th>標的</Th>
                            <Th isNumeric>下注金額</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </Box>

    );
}