import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.59 7.41L18.17 11H6V13H18.17L14.58 16.59L16 18L22 12L16 6L14.59 7.41ZM2 6V18H4V6H2Z" />
    </Svg>
  )
}

Icon.displayName = 'Start'

/**
 * Material Icon: Start
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:start Material Icon Docs}
 */
export const Start = memo(Icon)
