import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2.5 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M2 21v-4.5a4.5 4.5 0 1 1 9 0V21zm15.5-10a4 4 0 1 1 0-8 4 4 0 0 1 0 8M13 21v-4.5a4.5 4.5 0 1 1 9 0V21z" />
    </svg>
  )
})
Icon.displayName = 'Group3Fill'
/**
 * Remix Icon: Group 3 Fill
 * @see {@link https://remixicon.com/icon/group-3-fill Remix Icon Docs}
 */
export const Group3Fill = Icon
