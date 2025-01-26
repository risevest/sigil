import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.67127 4.25705L13.4142 12L12 13.4142L8.55382 9.96803C8.20193 10.5635 8 11.2582 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.87494 14.3429 8.13693 12.2503 8.00771L10.4459 6.20323C10.9416 6.07067 11.4625 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.7042 6.41079 9.50428 7.10925 8.52347L5.68014 7.09436C4.62708 8.44904 4 10.1513 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C10.8915 4 9.83557 4.22547 8.8757 4.63306L7.37443 3.13179C8.75768 2.40883 10.3311 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.87842 3.43029 6.09091 5.67127 4.25705Z" />
    </Svg>
  )
}

Icon.displayName = 'Scan2Line'

/**
 * Remix Icon: Scan 2 Line
 * @see {@link https://remixicon.com/icon/scan-2-line Remix Icon Docs}
 */
export const Scan2Line = memo(Icon)
