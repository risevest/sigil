import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          d="M12.868 5a3 3 0 0 1 2.572 1.457l2.167 3.611 2.641.33A2 2 0 0 1 22 12.383V15a3.001 3.001 0 0 1-2.128 2.872A3.001 3.001 0 0 1 14.17 18H9.829a3.001 3.001 0 0 1-5.7-.128A3.001 3.001 0 0 1 2 15v-3.807a2 2 0 0 1 .143-.743l1.426-3.564A3 3 0 0 1 6.354 5zM7 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4.132-9H11v3h4.234l-1.509-2.514A1 1 0 0 0 12.868 7M9 7H6.354a1 1 0 0 0-.928.629L4.477 10H9z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'JeepFill'

/**
 * MingCute Icon: Jeep Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const JeepFill = memo(Icon)
