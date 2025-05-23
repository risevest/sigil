import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M15 21H13V19H15V21ZM13 14H11V19H13V14ZM21 12H19V16H21V12ZM19 10H17V12H19V10ZM7 12H5V14H7V12ZM5 10H3V12H5V10ZM12 5H14V3H12V5ZM4.5 4.5V7.5H7.5V4.5H4.5ZM9 9H3V3H9V9ZM4.5 16.5V19.5H7.5V16.5H4.5ZM9 21H3V15H9V21ZM16.5 4.5V7.5H19.5V4.5H16.5ZM21 9H15V3H21V9ZM19 19V16H15V18H17V21H21V19H19ZM17 12H13V14H17V12ZM13 10H7V12H9V14H11V12H13V10ZM14 9V7H12V5H10V9H14ZM6.75 5.25H5.25V6.75H6.75V5.25ZM6.75 17.25H5.25V18.75H6.75V17.25ZM18.75 5.25H17.25V6.75H18.75V5.25Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'QrCode2'

/**
 * Material Icon: Qr Code 2
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:qr_code_2 Material Icon Docs}
 */
export const QrCode2 = memo(Icon)
