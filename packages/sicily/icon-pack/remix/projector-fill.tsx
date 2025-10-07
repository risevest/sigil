import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 3h18a1 1 0 0 1 1 1v6h-3.126a4.002 4.002 0 0 0-7.748 0H2V4a1 1 0 0 1 1-1m-1 9v8a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-8h-3.126a4.002 4.002 0 0 1-7.748 0zm13-3a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-9 6h2v2H6z" />
    </svg>
  )
})
Icon.displayName = 'ProjectorFill'
/**
 * Remix Icon: Projector Fill
 * @see {@link https://remixicon.com/icon/projector-fill Remix Icon Docs}
 */
export const ProjectorFill = Icon
