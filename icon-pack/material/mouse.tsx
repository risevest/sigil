import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 8.96516C19.96 4.57516 16.4 1.03516 12 1.03516C7.6 1.03516 4.04 4.57516 4 8.96516V14.9652C4 19.3852 7.58 22.9652 12 22.9652C16.42 22.9652 20 19.3852 20 14.9652V8.96516ZM18 8.96516H13V3.12516C15.81 3.59516 17.96 6.02516 18 8.96516ZM11 3.12516V8.96516H6C6.04 6.02516 8.19 3.59516 11 3.12516ZM18 14.9652C18 18.2752 15.31 20.9652 12 20.9652C8.69 20.9652 6 18.2752 6 14.9652V10.9652H18V14.9652Z" />
    </Svg>
  )
}

Icon.displayName = 'Mouse'

/**
 * Material Icon: Mouse
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:mouse Material Icon Docs}
 */
export const Mouse = memo(Icon)
