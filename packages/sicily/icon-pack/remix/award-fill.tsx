import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8" />
    </svg>
  )
})
Icon.displayName = 'AwardFill'
/**
 * Remix Icon: Award Fill
 * @see {@link https://remixicon.com/icon/award-fill Remix Icon Docs}
 */
export const AwardFill = Icon
