import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.00488 3.00275H21.0049C21.5572 3.00275 22.0049 3.45046 22.0049 4.00275V20.0027C22.0049 20.555 21.5572 21.0027 21.0049 21.0027H3.00488C2.4526 21.0027 2.00488 20.555 2.00488 20.0027V4.00275C2.00488 3.45046 2.4526 3.00275 3.00488 3.00275ZM12.0049 9.00275H8.00488V11.0027H17.0049L12.0049 6.00275V9.00275ZM7.00488 13.0027L12.0049 18.0027V15.0027H16.0049V13.0027H7.00488Z" />
    </Svg>
  )
}

Icon.displayName = 'ExchangeBoxFill'

/**
 * Remix Icon: Exchange Box Fill
 * @see {@link https://remixicon.com/icon/exchange-box-fill Remix Icon Docs}
 */
export const ExchangeBoxFill = memo(Icon)
