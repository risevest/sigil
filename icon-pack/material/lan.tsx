import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 22H21V15H18V11H13V9H16V2H8V9H11V11H6V15H3V22H11V15H8V13H16V15H13V22ZM10 7V4H14V7H10ZM9 17V20H5V17H9ZM19 17V20H15V17H19Z" />
    </Svg>
  )
}

Icon.displayName = 'Lan'

/**
 * Material Icon: Lan
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:lan Material Icon Docs}
 */
export const Lan = memo(Icon)
