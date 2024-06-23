import {
  Badge,
  Box,
  Flex,
  Link,
  Skeleton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import useGetPrs from './queries/useGetPrs.ts'
import { flattenAll } from './queries/utils.ts'

function timeBetween(dateString: string): string {
  const date1 = new Date(dateString).toLocaleString()

  // Parse the date strings into Date objects
  const parseDate = (dateString: string) => {
    const [datePart, timePart] = dateString.split(', ')
    const [day, month, year] = datePart.split('/').map(Number)
    const [hours, minutes, seconds] = timePart.split(':').map(Number)
    return new Date(year, month - 1, day, hours, minutes, seconds)
  }

  const startDate = parseDate(date1)
  const endDate = new Date()

  // Calculate the difference in milliseconds
  // @ts-ignore
  const diffMs = Math.abs(endDate - startDate)

  // Calculate the difference in various units
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  const diffHours =
    Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) % 24
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

  if (diffDays > 0) {
    return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`
  }

  if (diffHours > 0) {
    return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`
  }

  if (diffMinutes > 0) {
    return `${diffMinutes} ${diffMinutes === 1 ? 'minute' : 'minutes'} ago`
  }

  return 'Just now'
}

const OverviewTable = () => {
  const { data, isLoading } = useGetPrs()

  if (isLoading) {
    return <Skeleton />
  }

  if (!data) {
    return null
  }

  const pullRequests = flattenAll(data)

  return (
    <Flex className="neubrutalist-box-fixed" width={'98%'}>
      <Table variant="striped" colorScheme="green" size={'sm'}>
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
        <Tbody>
          {pullRequests.map((pr, index) => (
            <Tr key={index}>
              <Td fontWeight={'semibold'}>{pr.repository}</Td>
              <Td>
                <Link href={pr.url} isExternal>
                  <Box display="flex" alignItems="center" fontStyle={'italic'}>
                    {pr.title}
                  </Box>
                </Link>
              </Td>

              <Td>{pr.author.login}</Td>
              <Td>{timeBetween(pr.createdAt)}</Td>
              <Td>{timeBetween(pr.updatedAt)}</Td>
              <Td>
                <Flex flexDirection={'column'} fontWeight={'bold'}>
                  <div style={{ color: 'blue' }}>Files: {pr.changedFiles}</div>
                  <div style={{ color: 'green' }}>Added: {pr.additions}</div>
                  <div style={{ color: 'red' }}>Deleted: {pr.deletions}</div>
                </Flex>
              </Td>

              <Td>
                {pr.labels.nodes.map((label, idx) => (
                  <Badge
                    key={idx}
                    colorScheme={label.color}
                    mr={1}
                    title={label.description || ''}
                  >
                    {label.name}
                  </Badge>
                ))}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  )
}
export default OverviewTable
