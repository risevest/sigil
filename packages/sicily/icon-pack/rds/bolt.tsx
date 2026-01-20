import { memo } from 'react'
import type { IconProps } from '../../types'
const Bolt = /* @__PURE__ */ memo(function Bolt(_props: IconProps) {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 25 25" width="1em" height="1em" {...props}>
      <mask
        id="a"
        width={25}
        height={25}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <path fill="currentColor" d="M.891.5h24v24h-24z" />
      </mask>
      <g mask="url(#a)">
        <path fill="currentColor" d="m8.89 22.5 1-7h-5l9-13h2l-1 8h6l-10 12z" />
      </g>
    </svg>
  )
})
export { Bolt }
