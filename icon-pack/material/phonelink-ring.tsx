import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M20.1125 7.7L19.1125 8.7C20.9125 10.5 20.9125 13.3 19.1125 15.2L20.1125 16.2C22.6125 13.9 22.6125 10.1 20.1125 7.7ZM18.0125 9.8L17.0125 10.8C17.5125 11.5 17.5125 12.4 17.0125 13.1L18.0125 14.1C19.2125 12.9 19.2125 11.1 18.0125 9.8ZM14.0125 1H4.0125C2.9125 1 2.0125 1.9 2.0125 3V21C2.0125 22.1 2.9125 23 4.0125 23H14.0125C15.1125 23 16.0125 22.1 16.0125 21V3C16.0125 1.9 15.1125 1 14.0125 1ZM14.0125 20H4.0125V4H14.0125V20Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'PhonelinkRing'

/**
 * Material Icon: Phonelink Ring
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:phonelink_ring Material Icon Docs}
 */
export const PhonelinkRing = memo(Icon)
