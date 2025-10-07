import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M0 0h24v24H0z" />
        <Path fill={color} d="M5 4a1 1 0 0 0 0 2h6v14a1 1 0 1 0 2 0V6h6a1 1 0 1 0 0-2z" />
      </G>
    </Svg>
  )
})
Icon.displayName = 'TextLine'
/**
 * MingCute Icon: Text Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TextLine = Icon
