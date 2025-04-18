import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 17C9 17.55 8.55 18 8 18C7.45 18 7 17.55 7 17C7 16.45 7.45 16 8 16C8.55 16 9 16.45 9 17ZM12 16C11.45 16 11 16.45 11 17C11 17.55 11.45 18 12 18C12.55 18 13 17.55 13 17C13 16.45 12.55 16 12 16ZM16 16C15.45 16 15 16.45 15 17C15 17.55 15.45 18 16 18C16.55 18 17 17.55 17 17C17 16.45 16.55 16 16 16ZM19 12V14H5V12C5 8.47 7.61 5.57 11 5.08V3H13V5.08C16.39 5.57 19 8.47 19 12ZM17 12C17 9.24 14.76 7 12 7C9.24 7 7 9.24 7 12H17ZM8 19C7.45 19 7 19.45 7 20C7 20.55 7.45 21 8 21C8.55 21 9 20.55 9 20C9 19.45 8.55 19 8 19ZM12 19C11.45 19 11 19.45 11 20C11 20.55 11.45 21 12 21C12.55 21 13 20.55 13 20C13 19.45 12.55 19 12 19ZM16 19C15.45 19 15 19.45 15 20C15 20.55 15.45 21 16 21C16.55 21 17 20.55 17 20C17 19.45 16.55 19 16 19Z" />
    </Svg>
  )
}

Icon.displayName = 'Shower'

/**
 * Material Icon: Shower
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:shower Material Icon Docs}
 */
export const Shower = memo(Icon)
