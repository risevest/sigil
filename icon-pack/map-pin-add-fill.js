import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM11 10H8V12H11V15H13V12H16V10H13V7H11V10Z" />
    </Svg>
  )
}

Icon.displayName = 'MapPinAddFill'

/**
 * Remix Icon: Map Pin Add Fill
 * @see {@link https://remixicon.com/icon/map-pin-add-fill Remix Icon Docs}
 */
export const MapPinAddFill = memo(Icon)