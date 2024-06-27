import OptionButtons from './Options/OptionButtons.tsx'
import OverviewBoxes from './Overviews/OverviewBoxes.tsx'
import { Flex } from '@chakra-ui/react'

const OverviewPage = () => {
  return (
    <Flex gap={4} pl={5} pt={5} w={'100%'} h={'100%'}>
      <OptionButtons />
      <OverviewBoxes />
    </Flex>
  )
}

export default OverviewPage
