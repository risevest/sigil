import { memo } from 'react'
import type { IconProps } from '../../types'
const ArrowCircleDown = /* @__PURE__ */ memo(function ArrowCircleDown(_props: IconProps) {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16.001A8 8 0 0 0 12 20" />
        <path d="m11.999 15.407-4.243-4.243L9.17 9.75l2.828 2.829 2.828-2.829 1.415 1.414z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="none" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})
/**
 * Remix Icon: Arrow Circle Down
 * @see {@link https://remixicon.com/icon/arrow-circle-down Remix Icon Docs}
 */
export { ArrowCircleDown }
