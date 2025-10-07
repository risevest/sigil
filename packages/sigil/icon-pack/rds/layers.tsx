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
        <Path fill={color} d="M.891.5h24v24h-24z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          fill={color}
          d="m12.89 21.55-9-7 1.65-1.25 7.35 5.7 7.35-5.7 1.65 1.25zm0-5.05-9-7 9-7 9 7z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'Layers'
export const Layers = Icon
