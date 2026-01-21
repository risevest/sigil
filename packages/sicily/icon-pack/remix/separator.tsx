import { memo } from 'react'
import type { IconProps } from '../../types'
const Separator = /* @__PURE__ */ memo(function Separator(_props: IconProps) {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2 11h2v2H2zm4 0h12v2H6zm14 0h2v2h-2z" />
    </svg>
  )
})
/**
 * Remix Icon: Separator
 * @see {@link https://remixicon.com/icon/separator Remix Icon Docs}
 */
export { Separator }
