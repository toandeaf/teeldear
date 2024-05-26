import { FC } from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import NotificationBox from './NotificationBox.tsx'

interface Props {
  title?: string
}

const OverviewBox: FC<Props> = ({ title }) => {
  return (
    <Flex
      className="neubrutalist-box-fixed"
      style={{ minWidth: '380px', maxWidth: '420px' }}
      flexDirection={'column'}
      gap={3}
    >
      <Heading size={'lg'}>{title ?? 'Box Title'}</Heading>

      <Flex gap={2} flexWrap={'wrap'}>
        <NotificationBox
          notificationCount={2}
          title={'TODOs'}
          color={'yellow'}
          fontColor={'black'}
        />
        <NotificationBox
          notificationCount={3}
          title={'TL;DRs'}
          color={'purple'}
        />
        <NotificationBox notificationCount={1} title={'Alerts'} color={'red'} />
      </Flex>
    </Flex>
  )
}

export default OverviewBox
