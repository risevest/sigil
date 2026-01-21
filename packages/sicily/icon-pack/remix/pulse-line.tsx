import { memo } from 'react'
import type { IconProps } from '../../types'
const PulseLine = /* @__PURE__ */ memo(function PulseLine(_props: IconProps) {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m9 7.539 6 14L18.66 13H23v-2h-5.66L15 16.461l-6-14L5.34 11H1v2h5.66z" />
    </svg>
  )
})
/**
 * Remix Icon: Pulse Line
 * @see {@link https://remixicon.com/icon/pulse-line Remix Icon Docs}
 */
export { PulseLine }
