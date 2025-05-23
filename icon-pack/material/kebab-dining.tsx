import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.75 7H18.5C19.88 7 21 5.88 21 4.5C21 3.12 19.88 2 18.5 2H17.75V1H16.25V2H15.5C14.12 2 13 3.12 13 4.5C13 5.88 14.12 7 15.5 7H16.25V8H13V13H16.25V14H15.5C14.12 14 13 15.12 13 16.5C13 17.88 14.12 19 15.5 19H16.25V23H17.75V19H18.5C19.88 19 21 17.88 21 16.5C21 15.12 19.88 14 18.5 14H17.75V13H21V8H17.75V7ZM15.5 5C15.22 5 15 4.78 15 4.5C15 4.22 15.22 4 15.5 4H18.5C18.78 4 19 4.22 19 4.5C19 4.78 18.78 5 18.5 5H15.5ZM18.5 16C18.78 16 19 16.22 19 16.5C19 16.78 18.78 17 18.5 17H15.5C15.22 17 15 16.78 15 16.5C15 16.22 15.22 16 15.5 16H18.5ZM19 10V11H15V10H19ZM7.75 7H8.5C9.88 7 11 5.88 11 4.5C11 3.12 9.88 2 8.5 2H7.75V1H6.25V2H5.5C4.12 2 3 3.12 3 4.5C3 5.88 4.12 7 5.5 7H6.25V8H3V13H6.25V14H5.5C4.12 14 3 15.12 3 16.5C3 17.88 4.12 19 5.5 19H6.25V23H7.75V19H8.5C9.88 19 11 17.88 11 16.5C11 15.12 9.88 14 8.5 14H7.75V13H11V8H7.75V7ZM5.5 5C5.22 5 5 4.78 5 4.5C5 4.22 5.22 4 5.5 4H8.5C8.78 4 9 4.22 9 4.5C9 4.78 8.78 5 8.5 5H5.5ZM8.5 16C8.78 16 9 16.22 9 16.5C9 16.78 8.78 17 8.5 17H5.5C5.22 17 5 16.78 5 16.5C5 16.22 5.22 16 5.5 16H8.5ZM9 10V11H5V10H9Z" />
    </Svg>
  )
}

Icon.displayName = 'KebabDining'

/**
 * Material Icon: Kebab Dining
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:kebab_dining Material Icon Docs}
 */
export const KebabDining = memo(Icon)
