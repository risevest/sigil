import { memo } from 'react'
import Svg, { Mask, Path, G } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 25 25" width={size} height={size} {...props}>
      <Mask
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
        <Path fill={color} d="M.688.5h24v24h-24z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          fill={color}
          d="M9.688 15.5v-6h6v6zm0 6v-2h-2q-.825 0-1.413-.587a1.93 1.93 0 0 1-.588-1.413v-2h-2v-2h2v-2h-2v-2h2v-2q0-.824.588-1.412A1.93 1.93 0 0 1 7.687 5.5h2v-2h2v2h2v-2h2v2h2q.825 0 1.413.588.587.587.587 1.412v2h2v2h-2v2h2v2h-2v2q0 .824-.587 1.413a1.93 1.93 0 0 1-1.413.587h-2v2h-2v-2h-2v2zm8-4v-10h-10v10z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'Memory'
export const Memory = Icon
