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
        <Path fill={color} d="M.391.5h24v24h-24z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          fill={color}
          d="m11.09 13.225-.85-1.275a.94.94 0 0 0-.35-.325.96.96 0 0 0-.474-.125h-6.55a5.6 5.6 0 0 1-.375-1.25q-.1-.6-.1-1.25 0-2.35 1.575-3.925T7.89 3.5q1.299 0 2.475.55A5.9 5.9 0 0 1 12.39 5.6a5.9 5.9 0 0 1 2.025-1.55 5.8 5.8 0 0 1 2.475-.55q2.35 0 3.925 1.575T22.39 9q0 .65-.1 1.25a5.6 5.6 0 0 1-.375 1.25h-5.95L14.24 8.95a.95.95 0 0 0-.388-.337 1.2 1.2 0 0 0-.512-.113.88.88 0 0 0-.563.188q-.237.187-.337.487zm1.3 8.625-1.45-1.3q-2.625-2.35-4.3-4.025T4.017 13.5h4.8l1.725 2.55q.15.225.387.337t.513.113a.88.88 0 0 0 .562-.187q.238-.188.338-.488l1.35-4.075.875 1.3q.125.2.35.325t.475.125h5.375q-.951 1.35-2.625 3.025-1.675 1.675-4.3 4.025z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'Cardiology'
export const Cardiology = Icon
