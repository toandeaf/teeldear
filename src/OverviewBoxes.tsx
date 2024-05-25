import OverviewBox from './OverviewBox.tsx'
import { Flex } from '@chakra-ui/react'

const OverviewBoxes = () => {
  const names = ['Team City', 'Github', 'AWS', 'Slack', 'DataDog', 'Outlook']
  return (
    <Flex gap={5} flexWrap={'wrap'} alignContent={'flex-start'}>
      {names.map((name) => (
        <OverviewBox title={name} />
      ))}
    </Flex>
  )
}

export default OverviewBoxes
