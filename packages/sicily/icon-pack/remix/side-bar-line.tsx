import { memo } from 'react'
import type { IconProps } from '../../types'
const SideBarLine = /* @__PURE__ */ memo(function SideBarLine(_props: IconProps) {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m5 2H4v14h4zm2 0v14h10V5z" />
    </svg>
  )
})
/**
 * Remix Icon: Side Bar Line
 * @see {@link https://remixicon.com/icon/side-bar-line Remix Icon Docs}
 */
export { SideBarLine }
