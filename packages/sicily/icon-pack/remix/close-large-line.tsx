import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M10.586 12 2.793 4.207l1.414-1.414L12 10.586l7.793-7.793 1.414 1.414L13.414 12l7.793 7.793-1.414 1.414L12 13.414l-7.793 7.793-1.414-1.414z" />
    </svg>
  )
})
Icon.displayName = 'CloseLargeLine'
/**
 * Remix Icon: Close Large Line
 * @see {@link https://remixicon.com/icon/close-large-line Remix Icon Docs}
 */
export const CloseLargeLine = Icon
