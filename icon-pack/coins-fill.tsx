import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.0049 2.00281C18.4232 2.00281 22.0049 5.58453 22.0049 10.0028C22.0049 13.2474 20.0733 16.0409 17.2973 17.296C16.0422 20.0718 13.249 22.0028 10.0049 22.0028C5.5866 22.0028 2.00488 18.4211 2.00488 14.0028C2.00488 10.7587 3.9359 7.96554 6.71122 6.71012C7.96681 3.93438 10.7603 2.00281 14.0049 2.00281ZM11.0049 9.00281H9.00488V10.0028C7.62417 10.0028 6.50488 11.1221 6.50488 12.5028C6.50488 13.8283 7.53642 14.9128 8.84051 14.9975L9.00488 15.0028H11.0049L11.0948 15.0109C11.328 15.0532 11.5049 15.2573 11.5049 15.5028C11.5049 15.7483 11.328 15.9524 11.0948 15.9948L11.0049 16.0028H7.00488V18.0028H9.00488V19.0028H11.0049V18.0028C12.3856 18.0028 13.5049 16.8835 13.5049 15.5028C13.5049 14.1773 12.4733 13.0928 11.1693 13.0081L11.0049 13.0028H9.00488L8.91501 12.9948C8.68176 12.9524 8.50488 12.7483 8.50488 12.5028C8.50488 12.2573 8.68176 12.0532 8.91501 12.0109L9.00488 12.0028H13.0049V10.0028H11.0049V9.00281ZM14.0049 4.00281C12.2214 4.00281 10.6196 4.78097 9.52064 6.01629C9.68133 6.00764 9.84254 6.00281 10.0049 6.00281C14.4232 6.00281 18.0049 9.58453 18.0049 14.0028C18.0049 14.1655 18 14.327 17.9905 14.4873C19.2265 13.3885 20.0049 11.7866 20.0049 10.0028C20.0049 6.6891 17.3186 4.00281 14.0049 4.00281Z" />
    </Svg>
  )
}

Icon.displayName = 'CoinsFill'

/**
 * Remix Icon: Coins Fill
 * @see {@link https://remixicon.com/icon/coins-fill Remix Icon Docs}
 */
export const CoinsFill = memo(Icon)