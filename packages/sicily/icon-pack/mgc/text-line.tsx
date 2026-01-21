import { memo } from 'react'
import type { IconProps } from '../../types'
const TextLine = /* @__PURE__ */ memo(function TextLine(_props: IconProps) {
  const props = _props
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g fill="none">
        <path d="M0 0h24v24H0z" />
        <path
          fill="currentColor"
          d="M5 4a1 1 0 0 0 0 2h6v14a1 1 0 1 0 2 0V6h6a1 1 0 1 0 0-2z"
        />
      </g>
    </svg>
  )
})
/**
 * MingCute Icon: Text Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { TextLine }
