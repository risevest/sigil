import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg height={size} width={size} {...otherProps}>
      <G fill={color}>
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          d="M5 3.5a1.5 1.5 0 1 0 0 3h5.5V20a1.5 1.5 0 0 0 3 0V6.5H19a1.5 1.5 0 0 0 0-3z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'TextFill'

/**
 * MingCute Icon: Text_fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TextFill = memo(Icon)
