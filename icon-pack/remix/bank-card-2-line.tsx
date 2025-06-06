import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979ZM20.0049 11.9998H4.00488V18.9998H20.0049V11.9998ZM20.0049 7.99979V4.99979H4.00488V7.99979H20.0049Z" />
    </Svg>
  )
}

Icon.displayName = 'BankCard2Line'

/**
 * Remix Icon: Bank Card 2 Line
 * @see {@link https://remixicon.com/icon/bank-card-2-line Remix Icon Docs}
 */
export const BankCard2Line = memo(Icon)
