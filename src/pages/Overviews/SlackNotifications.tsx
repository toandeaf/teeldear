import { FC } from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import NotificationBox from './NotificationBox.tsx'

const SlackNotifications: FC = () => {
  return (
    <Flex className="neubrutalist-box-fixed" flexDirection={'column'} gap={3}>
      <Flex gap={3} flexWrap={'wrap'}>
        <Flex justifyContent={'center'} alignItems={'center'}>
          <Box height={10} width={10}>
            <Image src={'/slack.png'} />
          </Box>
        </Flex>

        <NotificationBox
          notificationCount={2}
          title={'Urgent'}
          color={'red'}
          fontColor={'white'}
        />
        <NotificationBox
          notificationCount={3}
          title={'Important'}
          color={'yellow'}
          fontColor={'black'}
        />
        <NotificationBox
          notificationCount={1}
          title={'Possibly important'}
          color={'orange'}
          fontColor={'black'}
        />
        <NotificationBox
          notificationCount={1}
          title={'Chit chat'}
          color={'purple'}
        />
        <NotificationBox
          notificationCount={1}
          title={'Everything else'}
          color={'grey'}
        />
      </Flex>
    </Flex>
  )
}

export default SlackNotifications
