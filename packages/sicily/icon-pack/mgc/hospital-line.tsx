import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g fill="none">
        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <path
          fill="currentColor"
          d="M15 2a2 2 0 0 1 2 2v5h2a2 2 0 0 1 2 2v9.9a1.1 1.1 0 0 1-1.1 1.1H4.1A1.1 1.1 0 0 1 3 20.9V4a2 2 0 0 1 2-2zm0 2H5v16h2v-3a3 3 0 1 1 6 0v3h2zm4 7h-2v9h2zm-9 5a1 1 0 0 0-.993.883L9 17v3h2v-3a1 1 0 0 0-1-1m0-10a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1H8a1 1 0 0 1 0-2h1V7a1 1 0 0 1 1-1"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'HospitalLine'
/**
 * MingCute Icon: Hospital Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const HospitalLine = Icon
