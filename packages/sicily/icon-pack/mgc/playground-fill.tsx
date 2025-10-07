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
          d="M11 5v4.17a3.001 3.001 0 0 0-.172 5.592l.172.067V19H4a2 2 0 0 1-1.995-1.85L2 17v-1h3a2 2 0 0 0 1.995-1.85L7 14v-4a2 2 0 0 0-1.85-1.995L5 8H2V7a2 2 0 0 1 1.85-1.995L4 5zm9 0a2 2 0 0 1 2 2v1h-3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3v1a2 2 0 0 1-2 2h-7v-4.17a3.001 3.001 0 0 0 0-5.66V5zM5 10v4H2v-4zm17 0v4h-3v-4zm-10 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'PlaygroundFill'
/**
 * MingCute Icon: Playground Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const PlaygroundFill = Icon
