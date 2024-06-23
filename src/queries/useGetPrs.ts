import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { ResponseData } from './types.ts'
import { invoke } from '@tauri-apps/api'

const useGetPrs = (): UseQueryResult<ResponseData> => {
  return useQuery<ResponseData>({
    queryKey: [''],
    queryFn: async () => {
      const prResponse: any = await invoke('prs_please', { sure: 'why' })

      const actualValues: ResponseData = JSON.parse(prResponse)

      return actualValues
    },
    placeholderData: { viewer: { repositories: { nodes: [] } } },
  })
}

export default useGetPrs
