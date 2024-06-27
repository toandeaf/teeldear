import { Avatar, Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'

interface Props {
  notificationCount: number
  title: string
  color: string
  fontColor?: string
}

const NotificationBox: FC<Props> = ({
  notificationCount,
  title,
  color,
  fontColor,
}) => {
  return (
    <Flex
      className={'neubrutalist-button'}
      alignItems={'center'}
      justifyItems={'center'}
      pt={1}
      pb={1}
      pl={1}
      width={'160px'}
      gap={2}
    >
      <Avatar
        className={'neubrutalist-notification'}
        size={'sm'}
        fontWeight={'bold'}
        name={`${notificationCount}`}
        borderColor={'black'}
        backgroundColor={color}
        color={fontColor}
      />
      <Text fontWeight={'bold'}>{title}</Text>
    </Flex>
  )
}

export default NotificationBox
