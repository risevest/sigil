import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M0 0h24v24H0z" />
        <Path fill={color} d="M5 4a1 1 0 0 0 0 2h6v14a1 1 0 1 0 2 0V6h6a1 1 0 1 0 0-2z" />
      </G>
    </Svg>
  )
}

Icon.displayName = 'TextLine'

/**
 * MingCute Icon: Text Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TextLine = memo(Icon)
