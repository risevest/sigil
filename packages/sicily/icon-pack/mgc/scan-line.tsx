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
          d="M4 15a1 1 0 0 1 .993.883L5 16v3h4a1 1 0 0 1 .117 1.993L9 21H5a2 2 0 0 1-1.995-1.85L3 19v-3a1 1 0 0 1 1-1m16 0a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2h-4a1 1 0 1 1 0-2h4v-3a1 1 0 0 1 1-1m0-4a1 1 0 0 1 .117 1.993L20 13H4a1 1 0 0 1-.117-1.993L4 11zM9 3a1 1 0 0 1 0 2H5v3a1 1 0 0 1-2 0V5a2 2 0 0 1 2-2zm10 0a2 2 0 0 1 2 2v3a1 1 0 1 1-2 0V5h-4a1 1 0 1 1 0-2z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'ScanLine'
/**
 * MingCute Icon: Scan Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ScanLine = Icon
