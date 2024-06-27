import { Flex } from '@chakra-ui/react'
import PullRequestsTable from './PullRequestsTable.tsx'
import TicketsTable from './TicketsTable.tsx'
import SlackNotifications from './SlackNotifications.tsx'

const OverviewBoxes = () => {
  return (
    <Flex
      gap={5}
      flexWrap={'wrap'}
      alignContent={'flex-start'}
      overflowY={'scroll'}
    >
      <SlackNotifications />

      <PullRequestsTable />

      <TicketsTable />
    </Flex>
  )
}

export default OverviewBoxes
