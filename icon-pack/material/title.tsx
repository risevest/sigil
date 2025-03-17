import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 4.5V7.5H10.5V19.5H13.5V7.5H19V4.5H5Z" />
    </Svg>
  )
}

Icon.displayName = 'Title'

/**
 * Material Icon: Title
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:title Material Icon Docs}
 */
export const Title = memo(Icon)
