import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22.0049 7.99979H13.0049C12.4526 7.99979 12.0049 8.4475 12.0049 8.99979V14.9998C12.0049 15.5521 12.4526 15.9998 13.0049 15.9998H22.0049V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V7.99979ZM15.0049 10.9998H18.0049V12.9998H15.0049V10.9998Z" />
    </Svg>
  )
}

Icon.displayName = 'Wallet2Fill'

/**
 * Remix Icon: Wallet 2 Fill
 * @see {@link https://remixicon.com/icon/wallet-2-fill Remix Icon Docs}
 */
export const Wallet2Fill = memo(Icon)
