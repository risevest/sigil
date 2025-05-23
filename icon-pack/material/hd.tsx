import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7.5 13H9.5V15H11V9H9.5V11.5H7.5V9H6V15H7.5V13ZM18 14V10C18 9.45 17.55 9 17 9H13V15H17C17.55 15 18 14.55 18 14ZM16.5 13.5H14.5V10.5H16.5V13.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Hd'

/**
 * Material Icon: Hd
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hd Material Icon Docs}
 */
export const Hd = memo(Icon)
