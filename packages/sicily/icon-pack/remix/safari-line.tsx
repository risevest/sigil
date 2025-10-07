import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m17.813 6.503-4.398 6.911-6.911 4.398A7.97 7.97 0 0 0 11 19.938V18h2v1.938a7.96 7.96 0 0 0 3.906-1.618l-1.37-1.37 1.414-1.414 1.37 1.37A7.96 7.96 0 0 0 19.939 13h-1.938v-2h1.938a7.97 7.97 0 0 0-2.126-4.497m-.315-.315a7.97 7.97 0 0 0-4.497-2.126V6h-2V4.062A7.96 7.96 0 0 0 7.095 5.68l1.37 1.37-1.414 1.414-1.37-1.37A7.96 7.96 0 0 0 4.063 11H6v2H4.063a7.97 7.97 0 0 0 2.126 4.497l4.398-6.911zM12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10" />
    </svg>
  )
})
Icon.displayName = 'SafariLine'
/**
 * Remix Icon: Safari Line
 * @see {@link https://remixicon.com/icon/safari-line Remix Icon Docs}
 */
export const SafariLine = Icon
