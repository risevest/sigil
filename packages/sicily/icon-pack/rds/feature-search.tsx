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
        <path d="m20.19 8.9 3.2 3.2-1.4 1.4-3.2-3.2q-.524.3-1.124.5t-1.275.2q-1.875 0-3.188-1.312-1.312-1.313-1.312-3.188t1.312-3.187T16.391 2t3.187 1.313T20.891 6.5q0 .675-.2 1.275t-.5 1.125m-3.8.1q1.05 0 1.776-.725.725-.725.725-1.775t-.725-1.775T16.39 4t-1.775.725T13.89 6.5t.725 1.775T16.39 9M4.89 22q-.825 0-1.412-.587A1.93 1.93 0 0 1 2.891 20V6q0-.824.587-1.412A1.93 1.93 0 0 1 4.891 4h5.5a5 5 0 0 0-.375 1.287q-.1.663-.1 1.313 0 2.725 1.925 4.55t4.575 1.825q.474 0 .95-.062a6 6 0 0 0 .975-.213l2.55 2.55V20q0 .824-.588 1.413a1.93 1.93 0 0 1-1.412.587z" />
      </g>
    </svg>
  )
})
Icon.displayName = 'FeatureSearch'
export const FeatureSearch = Icon
