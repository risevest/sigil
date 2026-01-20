import { memo } from 'react'
import type { IconProps } from '../../types'
const ToggleLine = /* @__PURE__ */ memo(function ToggleLine(_props: IconProps) {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8 7a5 5 0 0 0 0 10h8a5 5 0 0 0 0-10zm0-2h8a7 7 0 1 1 0 14H8A7 7 0 1 1 8 5m0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
    </svg>
  )
})
/**
 * Remix Icon: Toggle Line
 * @see {@link https://remixicon.com/icon/toggle-line Remix Icon Docs}
 */
export { ToggleLine }
