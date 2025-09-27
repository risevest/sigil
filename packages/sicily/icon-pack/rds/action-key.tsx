import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
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
        <path d="m22.49 23-3.074-3.05q-.45.274-.963.413a4 4 0 0 1-1.062.137q-1.65 0-2.825-1.175T13.39 16.5t1.175-2.825T17.39 12.5t2.825 1.175T21.39 16.5a3.85 3.85 0 0 1-.575 2.05l3.075 3.05zm-16.1-2.5q-1.65 0-2.824-1.175Q2.39 18.15 2.39 16.5t1.175-2.825T6.39 12.5t2.825 1.175T10.39 16.5t-1.175 2.825T6.39 20.5m11-2q.825 0 1.413-.587.588-.588.588-1.413t-.588-1.412a1.93 1.93 0 0 0-1.412-.588q-.825 0-1.413.588a1.93 1.93 0 0 0-.587 1.412q0 .824.587 1.413.588.587 1.413.587m-11-9q-1.65 0-2.824-1.175Q2.39 7.15 2.39 5.5t1.175-2.825T6.39 1.5t2.825 1.175T10.39 5.5 9.216 8.325 6.39 9.5m11 0q-1.65 0-2.824-1.175Q13.39 7.15 13.39 5.5t1.175-2.825T17.39 1.5t2.825 1.175T21.39 5.5t-1.175 2.825T17.39 9.5" />
      </g>
    </svg>
  )
})
Icon.displayName = 'ActionKey'
export const ActionKey = Icon
