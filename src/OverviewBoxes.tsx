import { Flex } from '@chakra-ui/react'
import OverviewTable from './OverviewTable.tsx'

const OverviewBoxes = () => {
  // const names = ['Team City', 'Github', 'AWS', 'Slack', 'DataDog', 'Outlook']
  return (
    <Flex
      gap={5}
      flexWrap={'wrap'}
      alignContent={'flex-start'}
      overflowY={'scroll'}
    >
      {/*{names.map((name) => (*/}
      {/*  <OverviewBox title={name} />*/}
      {/*))}*/}
      <OverviewTable />
    </Flex>
  )
}

export default OverviewBoxes
