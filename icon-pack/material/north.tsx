import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 9L6.41 10.41L11 5.83V22H13V5.83L17.59 10.42L19 9L12 2L5 9Z" />
    </Svg>
  )
}

Icon.displayName = 'North'

/**
 * Material Icon: North
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:north Material Icon Docs}
 */
export const North = memo(Icon)
