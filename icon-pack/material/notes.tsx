import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 11.01L3 11V13H21V11.01ZM3 16H15V18H3V16ZM21 6H3V8.01L21 8V6Z" />
    </Svg>
  )
}

Icon.displayName = 'Notes'

/**
 * Material Icon: Notes
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:notes Material Icon Docs}
 */
export const Notes = memo(Icon)
