import { Badge, Box, Flex, Link, Tbody, Td, Tr } from '@chakra-ui/react'
import { timeBetween } from './PullRequestsTable.utils.ts'
import { FC } from 'react'
import { PRWithRepo } from '../../queries/utils.ts'

interface Props {
  pullRequests: Array<PRWithRepo>
}

const PullRequestTableBody: FC<Props> = ({ pullRequests }) => {
  return (
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
                colorScheme={'red'}
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
  )
}

export default PullRequestTableBody
