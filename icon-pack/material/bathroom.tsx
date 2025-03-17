import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 14C8 13.45 8.45 13 9 13C9.55 13 10 13.45 10 14C10 14.55 9.55 15 9 15C8.45 15 8 14.55 8 14ZM12 15C12.55 15 13 14.55 13 14C13 13.45 12.55 13 12 13C11.45 13 11 13.45 11 14C11 14.55 11.45 15 12 15ZM15 15C15.55 15 16 14.55 16 14C16 13.45 15.55 13 15 13C14.45 13 14 13.45 14 14C14 14.55 14.45 15 15 15ZM12 7.5C10.24 7.5 8.78 8.81 8.54 10.5H15.47C15.22 8.81 13.76 7.5 12 7.5ZM12 6C14.76 6 17 8.24 17 11V12H7V11C7 8.24 9.24 6 12 6ZM9 18C9.55 18 10 17.55 10 17C10 16.45 9.55 16 9 16C8.45 16 8 16.45 8 17C8 17.55 8.45 18 9 18ZM12 18C12.55 18 13 17.55 13 17C13 16.45 12.55 16 12 16C11.45 16 11 16.45 11 17C11 17.55 11.45 18 12 18ZM15 18C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16C14.45 16 14 16.45 14 17C14 17.55 14.45 18 15 18ZM20 4H4V20H20V4ZM20 2C21.1 2 22 2.9 22 4V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V4C2 2.9 2.9 2 4 2H20Z" />
    </Svg>
  )
}

Icon.displayName = 'Bathroom'

/**
 * Material Icon: Bathroom
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bathroom Material Icon Docs}
 */
export const Bathroom = memo(Icon)
