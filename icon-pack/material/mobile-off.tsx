import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.2 5V13.61L19.2 15.61V3C19.2 1.9 18.3 1 17.2 1H7.2C6.49 1 5.87 1.37 5.52 1.93L8.59 5H17.2ZM1.69 3.76L5.2 7.27V21C5.2 22.1 6.1 23 7.2 23H17.2C18.22 23 19.05 22.23 19.18 21.25L20.9 22.97L22.31 21.56L3.1 2.35L1.69 3.76ZM7.2 9.27L16.93 19H7.2V9.27Z" />
    </Svg>
  )
}

Icon.displayName = 'MobileOff'

/**
 * Material Icon: Mobile Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:mobile_off Material Icon Docs}
 */
export const MobileOff = memo(Icon)
