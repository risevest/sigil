import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 10.15 4.63 8.46 5.69 7.1L7.59 9H10.42L7.1 5.69C8.46 4.63 10.15 4 12 4C16.41 4 20 7.59 20 12C20 13.85 19.37 15.54 18.31 16.9L16.41 15H13.58L16.89 18.31C15.54 19.37 13.85 20 12 20C7.59 20 4 16.41 4 12Z" />
      <Path d="M14.25 14L12.75 12L14.25 10H12.75L12 11L11.25 10H9.75L11.25 12L9.75 14H11.25L12 13L12.75 14H14.25Z" />
      <Path d="M8 10L7.25 11L6.5 10H5L6.5 12L5 14H6.5L7.25 13L8 14H9.5L8 12L9.5 10H8Z" />
      <Path d="M16 14L16.75 13L17.5 14H19L17.5 12L19 10H17.5L16.75 11L16 10H14.5L16 12L14.5 14H16Z" />
    </Svg>
  )
}

Icon.displayName = 'NoAdultContent'

/**
 * Material Icon: No Adult Content
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:no_adult_content Material Icon Docs}
 */
export const NoAdultContent = memo(Icon)
