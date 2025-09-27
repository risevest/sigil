import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 1v12A9 9 0 1 1 7.375 5.278L14 1.453v2.77zm-9 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10" />
    </svg>
  )
})
Icon.displayName = 'MeteorFill'
/**
 * Remix Icon: Meteor Fill
 * @see {@link https://remixicon.com/icon/meteor-fill Remix Icon Docs}
 */
export const MeteorFill = Icon
