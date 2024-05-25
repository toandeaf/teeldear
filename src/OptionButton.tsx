import { Flex, Text } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'

const OptionButton = () => {
  return (
    <div
      className={'neubrutalist-button'}
      style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}
    >
      <Flex direction={'column'} alignItems={'center'} fontSize={'14px'}>
        <ChatIcon />
        <Text fontWeight={'bold'}>Testing</Text>
      </Flex>
    </div>
  )
}

export default OptionButton
