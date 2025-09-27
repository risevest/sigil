import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 20 20" width="1em" height="1em" {...props}>
      <mask
        id="a"
        width={20}
        height={20}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <path fill="currentColor" d="M.635.4h19.2v19.2H.635z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="currentColor"
          d="M10.235 13.2a1.54 1.54 0 0 1-1.13-.47 1.54 1.54 0 0 1-.47-1.13q0-.66.47-1.13a1.54 1.54 0 0 1 1.13-.47q.66 0 1.13.47t.47 1.13-.47 1.13a1.54 1.54 0 0 1-1.13.47M6.535 6h7.4l1.6-3.2h-10.6zm.82 11.2h5.76q1.8 0 3.06-1.25t1.26-3.07q0-.76-.26-1.48a4.3 4.3 0 0 0-.74-1.3l-2.08-2.5h-8.24l-2.08 2.5q-.48.58-.74 1.3t-.26 1.48q0 1.82 1.25 3.07t3.07 1.25"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'MoneyBag'
export const MoneyBag = Icon
