import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 4L6 2L3 4V16V19C3 20.6569 4.34315 22 6 22H20C21.6569 22 23 20.6569 23 19V17H7V19C7 19.5523 6.55228 20 6 20C5.44772 20 5 19.5523 5 19V15H21V4L18 2L15 4L12 2L9 4Z" />
    </Svg>
  )
}

Icon.displayName = 'ReceiptFill'

/**
 * Remix Icon: Receipt Fill
 * @see {@link https://remixicon.com/icon/receipt-fill Remix Icon Docs}
 */
export const ReceiptFill = memo(Icon)