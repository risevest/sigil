import { memo } from 'react'
import type { IconProps } from '../../types'
const SquareFill = /* @__PURE__ */ memo(function SquareFill(_props: IconProps) {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" />
    </svg>
  )
})
/**
 * Remix Icon: Square Fill
 * @see {@link https://remixicon.com/icon/square-fill Remix Icon Docs}
 */
export { SquareFill }
