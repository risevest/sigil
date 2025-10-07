import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <path
          fill="currentColor"
          d="m13.351 3.064 8 3A1 1 0 0 1 21 8v11a2 2 0 0 1-2 2h-9v-5a1 1 0 1 0-2 0v5H5a2 2 0 0 1-2-2v-6a1 1 0 0 1-.263-1.965L13 8.236V5.068l-.351-.132a1 1 0 0 1 .702-1.872M17.5 14h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2m0-4h-1a1 1 0 0 0-.117 1.993L16.5 12h1a1 1 0 0 0 .117-1.993z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'House2Fill'
/**
 * MingCute Icon: House 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const House2Fill = Icon
