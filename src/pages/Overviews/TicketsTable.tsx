import { Flex, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

const PullRequestsTable = () => {
  const pullRequests = [1, 2, 3]
  return (
    <Flex className="neubrutalist-box-fixed" width={'98%'}>
      {/*<Flex justifyContent={'center'} alignItems={'center'}>*/}
      {/*  <Box height={10} width={10}>*/}
      {/*    <Image src={'/jira.png'} />*/}
      {/*  </Box>*/}
      {/*</Flex>*/}
      <Table variant="striped" colorScheme="green" size={'sm'}>
        <Thead>
          <Tr>
            <Th>Project</Th>
            <Th>Title</Th>
            <Th>Status</Th>
            <Th>Last Updated</Th>
          </Tr>
        </Thead>
        <Tbody>
          {pullRequests.map((_, index) => (
            <Tr key={index}>
              <Td fontWeight={'semibold'}>Admin Portal</Td>
              <Td>Implement this</Td>
              <Td>Blocked</Td>
              <Td>3 hours ago</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  )
}
export default PullRequestsTable
