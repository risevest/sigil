import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 0H6C4.34 0 3 1.34 3 3V21C3 22.66 4.34 24 6 24H18C19.66 24 21 22.66 21 21V3C21 1.34 19.66 0 18 0ZM14 22H10V21H14V22ZM19.25 19H4.75V3H19.25V19Z" />
    </Svg>
  )
}

Icon.displayName = 'TabletAndroid'

/**
 * Material Icon: Tablet Android
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:tablet_android Material Icon Docs}
 */
export const TabletAndroid = memo(Icon)
