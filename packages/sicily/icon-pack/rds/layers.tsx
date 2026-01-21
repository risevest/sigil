import { memo } from 'react'
import type { IconProps } from '../../types'
const Layers = /* @__PURE__ */ memo(function Layers(_props: IconProps) {
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
        <path
          fill="currentColor"
          d="m12.89 21.55-9-7 1.65-1.25 7.35 5.7 7.35-5.7 1.65 1.25zm0-5.05-9-7 9-7 9 7z"
        />
      </g>
    </svg>
  )
})
export { Layers }
