import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M5.035 21.5015H21.035V5.47152L5.035 21.5015ZM19.035 19.5015H17.035V12.2815L19.035 10.2815V19.5015ZM4.255 6.72152L2.965 5.43152C6.865 1.52152 13.205 1.52152 17.115 5.43152L15.825 6.72152C12.635 3.53152 7.445 3.53152 4.255 6.72152ZM11.965 10.5715L10.035 12.5015L8.105 10.5715C9.175 9.51152 10.895 9.51152 11.965 10.5715ZM13.255 9.29152C11.475 7.52152 8.595 7.52152 6.825 9.29152L5.535 8.00152C8.015 5.52152 12.055 5.52152 14.535 8.00152L13.255 9.29152Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'CellWifi'

/**
 * Material Icon: Cell Wifi
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:cell_wifi Material Icon Docs}
 */
export const CellWifi = memo(Icon)
