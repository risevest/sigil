import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M9.5 6.5V9.5H6.5V6.5H9.5ZM11 5H5V11H11V5ZM9.5 14.5V17.5H6.5V14.5H9.5ZM11 13H5V19H11V13ZM17.5 6.5V9.5H14.5V6.5H17.5ZM19 5H13V11H19V5ZM13 13H14.5V14.5H13V13ZM14.5 14.5H16V16H14.5V14.5ZM16 13H17.5V14.5H16V13ZM13 16H14.5V17.5H13V16ZM14.5 17.5H16V19H14.5V17.5ZM16 16H17.5V17.5H16V16ZM17.5 14.5H19V16H17.5V14.5ZM17.5 17.5H19V19H17.5V17.5ZM22 7H20V4H17V2H22V7ZM22 22V17H20V20H17V22H22ZM2 22H7V20H4V17H2V22ZM2 2V7H4V4H7V2H2Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'QrCodeScanner'

/**
 * Material Icon: Qr Code Scanner
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:qr_code_scanner Material Icon Docs}
 */
export const QrCodeScanner = memo(Icon)
