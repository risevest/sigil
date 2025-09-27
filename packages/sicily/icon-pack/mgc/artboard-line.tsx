import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g fill="none">
        <path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <path
          fill="currentColor"
          d="M5 17a2 2 0 0 1 2 2v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2zm15 0a1 1 0 0 1 .117 1.993L20 19h-1v1a1 1 0 0 1-1.993.117L17 20v-1a2 2 0 0 1 1.85-1.995L19 17zM16 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2H8v8h8zM6 3a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a1 1 0 0 1 0-2h1V4a1 1 0 0 1 1-1m12 0a1 1 0 0 1 .993.883L19 4v1h1a1 1 0 0 1 .117 1.993L20 7h-1a2 2 0 0 1-1.995-1.85L17 5V4a1 1 0 0 1 1-1"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'ArtboardLine'
/**
 * MingCute Icon: Artboard Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ArtboardLine = Icon
