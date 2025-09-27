import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m10-10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9" />
    </svg>
  )
})
Icon.displayName = 'Apps2Fill'
/**
 * Remix Icon: Apps 2 Fill
 * @see {@link https://remixicon.com/icon/apps-2-fill Remix Icon Docs}
 */
export const Apps2Fill = Icon
