import { memo } from 'react'
import Svg, { Mask, Path, G } from 'react-native-svg'
import type { IconProps } from '../../types'
const BackHand = /* @__PURE__ */ memo(function BackHand(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 25 24" width={size} height={size} {...props}>
      <Mask
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
        <Path fill={color} d="M.434 0h24v24h-24z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          fill={color}
          d="M13.233 23a8.2 8.2 0 0 1-3.85-.937 8 8 0 0 1-2.95-2.613l-4.8-7.05.475-.475q.5-.525 1.237-.6t1.338.35l2.75 1.9V4q0-.424.287-.712A.97.97 0 0 1 8.433 3q.424 0 .712.288.288.287.288.712v13.425l-3.7-2.575 2.375 3.45a6.14 6.14 0 0 0 2.225 1.988 6.1 6.1 0 0 0 2.9.712q2.575 0 4.387-1.812 1.813-1.813 1.813-4.388V5q0-.424.287-.713A.97.97 0 0 1 20.433 4q.424 0 .712.287.288.288.288.713v9.8q0 3.424-2.388 5.813Q16.658 23 13.233 23m-1.8-11V2q0-.424.287-.712A.97.97 0 0 1 12.433 1q.424 0 .712.288.288.287.288.712v10zm4 0V3q0-.424.287-.712A.97.97 0 0 1 16.433 2q.424 0 .712.288.288.287.288.712v9z"
        />
      </G>
    </Svg>
  )
})
export { BackHand }
