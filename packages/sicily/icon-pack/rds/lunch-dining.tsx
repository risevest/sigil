import { memo } from 'react'
import type { IconProps } from '../../types'
const LunchDining = /* @__PURE__ */ memo(function LunchDining(_props: IconProps) {
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
        <path fill="currentColor" d="M.391.5h24v24h-24z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="currentColor"
          d="M4.39 21.5q-.825 0-1.412-.587a1.93 1.93 0 0 1-.587-1.413v-3h20v3q0 .824-.588 1.413a1.93 1.93 0 0 1-1.412.587zm8-7.5q-.9 0-1.424.5-.525.5-1.925.5t-1.9-.5-1.4-.5-1.425.5-1.925.5v-2q.9 0 1.425-.5T5.74 12t1.9.5 1.4.5 1.425-.5 1.925-.5 1.925.5 1.425.5 1.4-.5 1.9-.5 1.975.5 1.375.5v2q-1.401 0-1.875-.5-.475-.5-1.375-.5t-1.45.5-1.95.5-1.925-.5-1.425-.5m-10-3.5v-1q0-2.875 2.713-4.437T12.391 3.5t7.287 1.563q2.713 1.561 2.713 4.437v1z"
        />
      </g>
    </svg>
  )
})
export { LunchDining }
