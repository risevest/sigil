import { memo } from 'react'
import type { IconProps } from '../../types'
const ShowChart = /* @__PURE__ */ memo(function ShowChart(_props: IconProps) {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 25 24" width="1em" height="1em" {...props}>
      <mask
        id="a"
        width={25}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <path d="M.891 0h24v24h-24z" />
      </mask>
      <g mask="url(#a)">
        <path d="M4.39 18.5 2.89 17l7.5-7.5 4 4 7.1-8 1.4 1.4-8.5 9.6-4-4z" />
      </g>
    </svg>
  )
})
export { ShowChart }
