import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 1v12A9 9 0 1 1 7.375 5.278L14 1.453v2.77zm-2 3.122-7 3.224v-2.43L8.597 6.881a7 7 0 0 0-3.592 5.845L5 13a7 7 0 0 0 13.996.24L19 13zM12 8a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
    </svg>
  )
})
Icon.displayName = 'MeteorLine'
/**
 * Remix Icon: Meteor Line
 * @see {@link https://remixicon.com/icon/meteor-line Remix Icon Docs}
 */
export const MeteorLine = Icon
