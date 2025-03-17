import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 17.5V19.5H19V17.5H5ZM9.5 13.3H14.5L15.4 15.5H17.5L12.75 4.5H11.25L6.5 15.5H8.6L9.5 13.3ZM12 6.48L13.87 11.5H10.13L12 6.48Z" />
    </Svg>
  )
}

Icon.displayName = 'TextFormat'

/**
 * Material Icon: Text Format
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:text_format Material Icon Docs}
 */
export const TextFormat = memo(Icon)
