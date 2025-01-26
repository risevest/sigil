import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.4142 5.99996L15.2426 7.82839L13.8284 9.24261L9.58579 4.99996L13.8284 0.757324L15.2426 2.17154L13.4142 3.99996H16C18.7614 3.99996 21 6.23854 21 8.99996V13H19V8.99996C19 7.34311 17.6569 5.99996 16 5.99996H13.4142ZM15 11V21C15 21.5522 14.5523 22 14 22H4C3.44772 22 3 21.5522 3 21V11C3 10.4477 3.44772 9.99996 4 9.99996H14C14.5523 9.99996 15 10.4477 15 11ZM13 12H5V20H13V12Z" />
    </Svg>
  )
}

Icon.displayName = 'Anticlockwise2Line'

/**
 * Remix Icon: Anticlockwise 2 Line
 * @see {@link https://remixicon.com/icon/anticlockwise-2-line Remix Icon Docs}
 */
export const Anticlockwise2Line = memo(Icon)