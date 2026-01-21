import { memo } from 'react'
import type { IconProps } from '../../types'
const WaterDrop = /* @__PURE__ */ memo(function WaterDrop(_props: IconProps) {
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
          d="M13.166 19.5q.3-.025.512-.238a.7.7 0 0 0 .213-.512.74.74 0 0 0-.225-.562.72.72 0 0 0-.575-.188q-1.026.075-2.175-.562-1.15-.638-1.45-2.313a.74.74 0 0 0-.263-.45.75.75 0 0 0-.487-.175.72.72 0 0 0-.575.262q-.225.263-.15.613.425 2.275 2 3.25t3.175.875m-.275 3q-3.426 0-5.713-2.35T4.891 14.3q0-2.501 1.987-5.437Q8.866 5.925 12.891 2.5q4.024 3.425 6.012 6.363 1.988 2.937 1.988 5.437 0 3.5-2.288 5.85t-5.712 2.35"
        />
      </g>
    </svg>
  )
})
export { WaterDrop }
