import { FC } from 'react'
import { Heading, Link, Text } from '@chakra-ui/react'

interface Props {
  title?: string
}

const OverviewBox: FC<Props> = ({ title }) => {
  return (
    <div
      className="neubrutalist-box"
      style={{ minWidth: '420px', height: '180px' }}
    >
      <Heading>{title ?? 'Box Title'}</Heading>
      <Text>This is a description for the neubrutalist box.</Text>
      <Link href="#">Learn More</Link>
    </div>
  )
}

export default OverviewBox
