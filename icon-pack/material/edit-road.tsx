import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.4988 4H14.4988V11.9L16.4988 9.9V4Z" />
      <Path d="M4.49878 4H2.49878V20H4.49878V4Z" />
      <Path d="M10.4988 4H8.49878V8H10.4988V4Z" />
      <Path d="M10.4988 10H8.49878V14H10.4988V10Z" />
      <Path d="M10.4988 16H8.49878V20H10.4988V16Z" />
      <Path d="M21.0588 12.59L19.9088 11.44C19.3188 10.85 18.3688 10.85 17.7888 11.44L12.4988 16.73V20H15.7688L21.0588 14.71C21.6488 14.12 21.6488 13.17 21.0588 12.59ZM15.0788 18.45H14.0488V17.42L17.4988 13.97L18.5288 15L15.0788 18.45Z" />
    </Svg>
  )
}

Icon.displayName = 'EditRoad'

/**
 * Material Icon: Edit Road
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:edit_road Material Icon Docs}
 */
export const EditRoad = memo(Icon)
