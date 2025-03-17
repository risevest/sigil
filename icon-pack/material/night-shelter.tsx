import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 5.5L18 10V19H6V10L12 5.5ZM12 3L4 9V21H20V9L12 3ZM15 12H11.5V15.5H8V11H7V18H8V16.5H16V18H17V14C17 12.9 16.1 12 15 12ZM9.75 12.5C9.06 12.5 8.5 13.06 8.5 13.75C8.5 14.44 9.06 15 9.75 15C10.44 15 11 14.44 11 13.75C11 13.06 10.44 12.5 9.75 12.5Z" />
    </Svg>
  )
}

Icon.displayName = 'NightShelter'

/**
 * Material Icon: Night Shelter
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:night_shelter Material Icon Docs}
 */
export const NightShelter = memo(Icon)
