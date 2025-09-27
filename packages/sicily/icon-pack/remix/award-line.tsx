import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0M9 16.42v3.049l3-1.8 3 1.8v-3.05A8 8 0 0 1 12 17a8 8 0 0 1-3-.581M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12" />
    </svg>
  )
})
Icon.displayName = 'AwardLine'
/**
 * Remix Icon: Award Line
 * @see {@link https://remixicon.com/icon/award-line Remix Icon Docs}
 */
export const AwardLine = Icon
