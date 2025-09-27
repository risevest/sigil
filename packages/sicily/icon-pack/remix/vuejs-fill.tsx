import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M1.001 3h4l7 12 7-12h4l-11 19zm8.667 0L12 7l2.333-4h4.035l-6.368 11L5.633 3z" />
    </svg>
  )
})
Icon.displayName = 'VuejsFill'
/**
 * Remix Icon: Vuejs Fill
 * @see {@link https://remixicon.com/icon/vuejs-fill Remix Icon Docs}
 */
export const VuejsFill = Icon
