import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 17H19V19H5V17ZM12 5L5.33 15H18.67L12 5ZM12 8.6L14.93 13H9.07L12 8.6Z" />
    </Svg>
  )
}

Icon.displayName = 'Eject'

/**
 * Material Icon: Eject
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:eject Material Icon Docs}
 */
export const Eject = memo(Icon)
