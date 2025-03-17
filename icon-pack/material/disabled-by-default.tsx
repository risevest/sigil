import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 19H5V5H19V19ZM3 3V21H21V3H3ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z" />
    </Svg>
  )
}

Icon.displayName = 'DisabledByDefault'

/**
 * Material Icon: Disabled By Default
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:disabled_by_default Material Icon Docs}
 */
export const DisabledByDefault = memo(Icon)
