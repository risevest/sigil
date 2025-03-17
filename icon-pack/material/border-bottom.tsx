import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 11H7V13H9V11ZM13 15H11V17H13V15ZM9 3H7V5H9V3ZM13 11H11V13H13V11ZM5 3H3V5H5V3ZM13 7H11V9H13V7ZM17 11H15V13H17V11ZM13 3H11V5H13V3ZM17 3H15V5H17V3ZM19 13H21V11H19V13ZM19 17H21V15H19V17ZM5 7H3V9H5V7ZM19 3V5H21V3H19ZM19 9H21V7H19V9ZM5 11H3V13H5V11ZM3 21H21V19H3V21ZM5 15H3V17H5V15Z" />
    </Svg>
  )
}

Icon.displayName = 'BorderBottom'

/**
 * Material Icon: Border Bottom
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:border_bottom Material Icon Docs}
 */
export const BorderBottom = memo(Icon)
