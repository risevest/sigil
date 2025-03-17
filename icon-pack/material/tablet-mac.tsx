import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 0H5C3.62 0 2.5 1.12 2.5 2.5V21.5C2.5 22.88 3.62 24 5 24H19C20.38 24 21.5 22.88 21.5 21.5V2.5C21.5 1.12 20.38 0 19 0ZM12 23C11.17 23 10.5 22.33 10.5 21.5C10.5 20.67 11.17 20 12 20C12.83 20 13.5 20.67 13.5 21.5C13.5 22.33 12.83 23 12 23ZM19.5 19H4.5V3H19.5V19Z" />
    </Svg>
  )
}

Icon.displayName = 'TabletMac'

/**
 * Material Icon: Tablet Mac
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:tablet_mac Material Icon Docs}
 */
export const TabletMac = memo(Icon)
