import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.25 16C21.94 16 22.5 15.44 22.5 14.75C22.5 14.06 21.94 13.5 21.25 13.5H12.5V12.5H19.25C19.94 12.5 20.5 11.94 20.5 11.25C20.5 10.58 19.97 10.05 19.32 10.01L9.37 10L10.85 7.4C10.94 7.23 10.99 7.06 10.99 6.86C10.99 6.6 10.9 6.36 10.73 6.16L9.62 5L2.44 11.8C1.84 12.36 1.5 13.15 1.5 13.97V20C1.5 21.66 2.84 23 4.5 23H18.25C18.94 23 19.5 22.44 19.5 21.75C19.5 21.06 18.94 20.5 18.25 20.5H12.5V19.5H20.25C20.94 19.5 21.5 18.94 21.5 18.25C21.5 17.56 20.94 17 20.25 17H12.5V16H21.25ZM10.5 21H4.5C3.95 21 3.5 20.55 3.5 20V14C3.5 13.61 3.73 13.36 3.86 13.25L7.5 9.87V12H10.5V21ZM14 9C14.83 9 15.5 8.33 15.5 7.5C15.5 6.66 14 5 14 5C14 5 12.5 6.66 12.5 7.5C12.5 8.33 13.17 9 14 9ZM19 1C19 1 16.5 3.83 16.5 5.5C16.5 6.88 17.62 8 19 8C20.38 8 21.5 6.88 21.5 5.5C21.5 3.83 19 1 19 1ZM19 6.5C18.45 6.5 18 6.05 18 5.5C18 5.1 18.43 4.28 19 3.45C19.57 4.28 20 5.1 20 5.5C20 6.05 19.55 6.5 19 6.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Wash'

/**
 * Material Icon: Wash
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wash Material Icon Docs}
 */
export const Wash = memo(Icon)
