import { Flex, Table, Th, Thead, Tr } from '@chakra-ui/react'
import useGetPrs from '../../queries/useGetPrs.ts'
import { flattenAll } from '../../queries/utils.ts'
import PullRequestTableBody from './PullRequestTableBody.tsx'
import LoadingTableBody from './LoadingTableBody.tsx'

const PullRequestsTable = () => {
  const { data, isLoading } = useGetPrs()

  if (!data) {
    return null
  }

  const pullRequests = flattenAll(data)

  return (
    <Flex className="neubrutalist-box-fixed" width={'98%'}>
      <Table size={'sm'}>
        <Thead>
          <Tr>
            <Th>Repo</Th>
            <Th>Title</Th>
            <Th>Author</Th>
            <Th>Created</Th>
            <Th>Last Updated</Th>
            <Th>Changes</Th>
            <Th>Labels</Th>
          </Tr>
        </Thead>
        {isLoading ? (
          <LoadingTableBody columns={7} />
        ) : (
          <PullRequestTableBody pullRequests={pullRequests} />
        )}
      </Table>
    </Flex>
  )
}
export default PullRequestsTable
