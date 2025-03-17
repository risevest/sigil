import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.75 3H16.75V12H18.75V3Z" />
      <Path d="M4.75 3H2.75V19H4.75V3Z" />
      <Path d="M11.75 3H9.75V7H11.75V3Z" />
      <Path d="M11.75 9H9.75V13H11.75V9Z" />
      <Path d="M11.75 15H9.75V19H11.75V15Z" />
      <Path d="M21.25 15.41L19.84 14L17.75 16.09L15.66 14L14.25 15.41L16.34 17.5L14.25 19.59L15.66 21L17.75 18.91L19.84 21L21.25 19.59L19.16 17.5L21.25 15.41Z" />
    </Svg>
  )
}

Icon.displayName = 'RemoveRoad'

/**
 * Material Icon: Remove Road
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:remove_road Material Icon Docs}
 */
export const RemoveRoad = memo(Icon)
