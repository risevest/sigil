import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m17.841 15.659.176.177.178-.177a2.25 2.25 0 1 1 3.182 3.182l-3.36 3.359-3.358-3.359a2.25 2.25 0 1 1 3.182-3.182M12 14v8H4a8 8 0 0 1 7.75-7.996zm0-13c3.315 0 6 2.685 6 6s-2.685 6-6 6-6-2.685-6-6 2.685-6 6-6" />
    </svg>
  )
})
Icon.displayName = 'UserHeartFill'
/**
 * Remix Icon: User Heart Fill
 * @see {@link https://remixicon.com/icon/user-heart-fill Remix Icon Docs}
 */
export const UserHeartFill = Icon
