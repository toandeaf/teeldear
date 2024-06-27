import { Flex, Text } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import { FC } from 'react'

interface Props {
  title: string
}

const OptionButton: FC<Props> = ({ title }) => {
  return (
    <div
      className={'neubrutalist-button'}
      style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}
    >
      <Flex direction={'column'} alignItems={'center'} fontSize={'14px'}>
        <ChatIcon />
        <Text fontWeight={'bold'}>{title}</Text>
      </Flex>
    </div>
  )
}

export default OptionButton
