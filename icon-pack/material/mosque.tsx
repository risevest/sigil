import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M24 8C24 6.9 22 5 22 5C22 5 20 6.9 20 8C20 8.74 20.4 9.38 21 9.72V14H19V12C19 11.05 18.34 10.26 17.45 10.06C17.79 9.48 18 8.81 18 8.09C18 6.78 17.35 5.56 16.26 4.84L12 2L7.74 4.84C6.65 5.56 6 6.78 6 8.09C6 8.81 6.21 9.48 6.55 10.05C5.66 10.26 5 11.05 5 12V14H3V9.72C3.6 9.38 4 8.74 4 8C4 6.9 2 5 2 5C2 5 0 6.9 0 8C0 8.74 0.4 9.38 1 9.72V22H11V18C11 17.45 11.45 17 12 17C12.55 17 13 17.45 13 18V22H23V9.72C23.6 9.38 24 8.74 24 8ZM8.85 6.5L12 4.4L15.15 6.5C15.68 6.86 16 7.45 16 8.09C16 9.14 15.14 10 14.09 10H9.91C8.86 10 8 9.14 8 8.09C8 7.45 8.32 6.86 8.85 6.5ZM21 20H15V18C15 16.35 13.65 15 12 15C10.35 15 9 16.35 9 18V20H3V16H7V12H17V16H21V20Z" />
    </Svg>
  )
}

Icon.displayName = 'Mosque'

/**
 * Material Icon: Mosque
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:mosque Material Icon Docs}
 */
export const Mosque = memo(Icon)
