import { SkeletonText, Tbody, Td, Tr } from '@chakra-ui/react'
import { FC } from 'react'

interface Props {
  columns: number
}

const LoadingTableBody: FC<Props> = ({ columns }) => {
  const prosColumns = Array.from({ length: columns }, (_, index) => index)

  return (
    <Tbody>
      <Tr>
        {prosColumns.map((_) => (
          <Td>
            <SkeletonText noOfLines={4} spacing="3" skeletonHeight="2" />
          </Td>
        ))}
      </Tr>
    </Tbody>
  )
}

export default LoadingTableBody
