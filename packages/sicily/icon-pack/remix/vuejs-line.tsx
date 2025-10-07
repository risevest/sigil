import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3.317 3 12 18l8.684-15h2.316l-11 19-11-19zm4.342 0L12 10.5 16.343 3h2.316L12 14.5 5.343 3z" />
    </svg>
  )
})
Icon.displayName = 'VuejsLine'
/**
 * Remix Icon: Vuejs Line
 * @see {@link https://remixicon.com/icon/vuejs-line Remix Icon Docs}
 */
export const VuejsLine = Icon
