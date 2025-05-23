import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.5 6H6.5V9H16.5V6H18.5V12H20.5V6C20.5 4.9 19.6 4 18.5 4H14.32C13.9 2.84 12.8 2 11.5 2C10.2 2 9.1 2.84 8.68 4H4.5C3.4 4 2.5 4.9 2.5 6V20C2.5 21.1 3.4 22 4.5 22H9.5V20H4.5V6ZM11.5 4C12.05 4 12.5 4.45 12.5 5C12.5 5.55 12.05 6 11.5 6C10.95 6 10.5 5.55 10.5 5C10.5 4.45 10.95 4 11.5 4Z" />
      <Path d="M17.51 14L16.09 15.41L17.67 16.99H11.5V18.99H17.67L16.09 20.58L17.51 21.99L21.5 17.99L17.51 14Z" />
    </Svg>
  )
}

Icon.displayName = 'ContentPasteGo'

/**
 * Material Icon: Content Paste Go
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:content_paste_go Material Icon Docs}
 */
export const ContentPasteGo = memo(Icon)
