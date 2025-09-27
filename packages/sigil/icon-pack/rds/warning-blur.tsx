import { memo } from 'react'
import Svg, { G, Path, Circle, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 129 128" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill={color}
          d="m65.3 55.148 8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H55.367a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0m-1.299 1.75-7.768 13.454H71.77zm0 10.102a1 1 0 1 1 0 2.001 1 1 0 0 1 0-2m0-7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"
        />
      </G>
      <G filter="url(#b)">
        <Circle cx={64.25} cy={64} r={14} fill={color} />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={color} d="M52 52h24v24H52z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
Icon.displayName = 'WarningBlur'
export const WarningBlur = Icon
