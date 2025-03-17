import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.64 7.64C9.87 7.14 10 6.59 10 6C10 3.79 8.21 2 6 2C3.79 2 2 3.79 2 6C2 8.21 3.79 10 6 10C6.59 10 7.14 9.87 7.64 9.64L10 12L7.64 14.36C7.14 14.13 6.59 14 6 14C3.79 14 2 15.79 2 18C2 20.21 3.79 22 6 22C8.21 22 10 20.21 10 18C10 17.41 9.87 16.86 9.64 16.36L12 14L19 21H22V20L9.64 7.64ZM6 8C4.9 8 4 7.11 4 6C4 4.89 4.9 4 6 4C7.1 4 8 4.89 8 6C8 7.11 7.1 8 6 8ZM6 20C4.9 20 4 19.11 4 18C4 16.89 4.9 16 6 16C7.1 16 8 16.89 8 18C8 19.11 7.1 20 6 20ZM12 12.5C11.72 12.5 11.5 12.28 11.5 12C11.5 11.72 11.72 11.5 12 11.5C12.28 11.5 12.5 11.72 12.5 12C12.5 12.28 12.28 12.5 12 12.5ZM19 3L13 9L15 11L22 4V3H19Z" />
    </Svg>
  )
}

Icon.displayName = 'ContentCut'

/**
 * Material Icon: Content Cut
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:content_cut Material Icon Docs}
 */
export const ContentCut = memo(Icon)
