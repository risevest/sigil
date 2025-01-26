import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.0049 19.9998H6.00488V21.9998H4.00488V19.9998H3.00488C2.4526 19.9998 2.00488 19.5521 2.00488 18.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V18.9998C22.0049 19.5521 21.5572 19.9998 21.0049 19.9998H20.0049V21.9998H18.0049V19.9998ZM11.0049 13.8738V16.9998H13.0049V13.8738C14.7301 13.4297 16.0049 11.8636 16.0049 9.99979C16.0049 7.79065 14.214 5.99979 12.0049 5.99979C9.79574 5.99979 8.00488 7.79065 8.00488 9.99979C8.00488 11.8636 9.27966 13.4297 11.0049 13.8738ZM12.0049 11.9998C10.9003 11.9998 10.0049 11.1044 10.0049 9.99979C10.0049 8.89522 10.9003 7.99979 12.0049 7.99979C13.1095 7.99979 14.0049 8.89522 14.0049 9.99979C14.0049 11.1044 13.1095 11.9998 12.0049 11.9998Z" />
    </Svg>
  )
}

Icon.displayName = 'SafeFill'

/**
 * Remix Icon: Safe Fill
 * @see {@link https://remixicon.com/icon/safe-fill Remix Icon Docs}
 */
export const SafeFill = memo(Icon)
