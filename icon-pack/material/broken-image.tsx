import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V14.42L5.99 15.41L9.99 11.41L13.99 15.41L17.99 11.42L19 12.43V19ZM19 9.59L17.99 8.58L13.99 12.59L9.99 8.59L5.99 12.59L5 11.59V5H19V9.59Z" />
    </Svg>
  )
}

Icon.displayName = 'BrokenImage'

/**
 * Material Icon: Broken Image
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:broken_image Material Icon Docs}
 */
export const BrokenImage = memo(Icon)
