import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 18V20H8V18H16ZM11 7.99V16H13V7.99H16L12 4L8 7.99H11Z" />
    </Svg>
  )
}

Icon.displayName = 'Upgrade'

/**
 * Material Icon: Upgrade
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:upgrade Material Icon Docs}
 */
export const Upgrade = memo(Icon)
