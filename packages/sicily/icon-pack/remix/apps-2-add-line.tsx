import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2.5 7a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m0 10a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m10 0a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m-3-10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M16 11V8h-3V6h3V3h2v3h3v2h-3v3z" />
    </svg>
  )
})
Icon.displayName = 'Apps2AddLine'
/**
 * Remix Icon: Apps 2 Add Line
 * @see {@link https://remixicon.com/icon/apps-2-add-line Remix Icon Docs}
 */
export const Apps2AddLine = Icon
