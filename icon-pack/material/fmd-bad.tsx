import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C7.8 2 4 5.22 4 10.2C4 13.52 6.67 17.45 12 22C17.33 17.45 20 13.52 20 10.2C20 5.22 16.2 2 12 2ZM12 19.33C7.95 15.63 6 12.54 6 10.19C6 6.57 8.65 4 12 4C15.35 4 18 6.57 18 10.2C18 12.54 16.05 15.64 12 19.33Z" />
      <Path d="M13 6H11V11H13V6Z" />
      <Path d="M13 13H11V15H13V13Z" />
    </Svg>
  )
}

Icon.displayName = 'FmdBad'

/**
 * Material Icon: Fmd Bad
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:fmd_bad Material Icon Docs}
 */
export const FmdBad = memo(Icon)
