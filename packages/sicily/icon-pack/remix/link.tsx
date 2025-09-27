import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18.364 15.536 16.95 14.12l1.414-1.414a5 5 0 0 0-7.071-7.071L9.878 7.05 8.464 5.636l1.414-1.414a7 7 0 0 1 9.9 9.9zm-2.829 2.828-1.414 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 0 0 7.07 7.071l1.415-1.414zm-.707-10.607 1.415 1.415-7.072 7.07-1.414-1.414z" />
    </svg>
  )
})
Icon.displayName = 'Link'
/**
 * Remix Icon: Link
 * @see {@link https://remixicon.com/icon/link Remix Icon Docs}
 */
export const Link = Icon
