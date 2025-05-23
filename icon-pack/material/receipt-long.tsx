import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2V16H3V19C3 20.66 4.34 22 6 22H18C19.66 22 21 20.66 21 19V2L19.5 3.5ZM15 20H6C5.45 20 5 19.55 5 19V18H15V20ZM19 19C19 19.55 18.55 20 18 20C17.45 20 17 19.55 17 19V16H8V5H19V19Z" />
      <Path d="M15 7H9V9H15V7Z" />
      <Path d="M18 7H16V9H18V7Z" />
      <Path d="M15 10H9V12H15V10Z" />
      <Path d="M18 10H16V12H18V10Z" />
    </Svg>
  )
}

Icon.displayName = 'ReceiptLong'

/**
 * Material Icon: Receipt Long
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:receipt_long Material Icon Docs}
 */
export const ReceiptLong = memo(Icon)
