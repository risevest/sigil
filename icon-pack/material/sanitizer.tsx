import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.5 6.5C14.5 5.66 16 4 16 4C16 4 17.5 5.66 17.5 6.5C17.5 7.33 16.83 8 16 8C15.17 8 14.5 7.33 14.5 6.5ZM18.5 15C19.88 15 21 13.88 21 12.5C21 10.83 18.5 8 18.5 8C18.5 8 16 10.83 16 12.5C16 13.88 17.12 15 18.5 15ZM12 14H10V12H8V14H6V16H8V18H10V16H12V14ZM15 12V20C15 21.1 14.1 22 13 22H5C3.9 22 3 21.1 3 20V12C3 9.03 5.16 6.57 8 6.09V4H6V2H12C13.13 2 14.15 2.39 14.99 3.01L13.56 4.44C13.1 4.17 12.57 4 12 4H10V6.09C12.84 6.57 15 9.03 15 12ZM13 12C13 9.79 11.21 8 9 8C6.79 8 5 9.79 5 12V20H13V12Z" />
    </Svg>
  )
}

Icon.displayName = 'Sanitizer'

/**
 * Material Icon: Sanitizer
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sanitizer Material Icon Docs}
 */
export const Sanitizer = memo(Icon)
