import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.00488 6.99972L11.4502 1.36952C11.7861 1.14559 12.2237 1.14559 12.5596 1.36952L21.0049 6.99972V20.9997C21.0049 21.552 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.552 3.00488 20.9997V6.99972ZM12.0049 10.9997C13.1095 10.9997 14.0049 10.1043 14.0049 8.99972C14.0049 7.89515 13.1095 6.99972 12.0049 6.99972C10.9003 6.99972 10.0049 7.89515 10.0049 8.99972C10.0049 10.1043 10.9003 10.9997 12.0049 10.9997Z" />
    </Svg>
  )
}

Icon.displayName = 'PriceTagFill'

/**
 * Remix Icon: Price Tag Fill
 * @see {@link https://remixicon.com/icon/price-tag-fill Remix Icon Docs}
 */
export const PriceTagFill = memo(Icon)
