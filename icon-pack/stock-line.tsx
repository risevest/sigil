import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.00488 5.00281H11.0049V14.0028H8.00488V17.0028H6.00488V14.0028H3.00488V5.00281H6.00488V2.00281H8.00488V5.00281ZM5.00488 7.00281V12.0028H9.00488V7.00281H5.00488ZM18.0049 10.0028H21.0049V19.0028H18.0049V22.0028H16.0049V19.0028H13.0049V10.0028H16.0049V7.00281H18.0049V10.0028ZM15.0049 12.0028V17.0028H19.0049V12.0028H15.0049Z" />
    </Svg>
  )
}

Icon.displayName = 'StockLine'

/**
 * Remix Icon: Stock Line
 * @see {@link https://remixicon.com/icon/stock-line Remix Icon Docs}
 */
export const StockLine = memo(Icon)