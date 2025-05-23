import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.90999 7.02988L1.42999 13.5199L7.91999 19.9999L14.41 13.5199L7.90999 7.02988ZM4.25999 13.5199L7.91999 9.85988L11.57 13.5199L7.90999 17.1799L4.25999 13.5199ZM19.93 7.25988C18.18 5.49988 15.87 4.61988 13.57 4.61988V1.37988L9.32999 5.61988L13.57 9.85988V6.61988C15.36 6.61988 17.15 7.29988 18.52 8.66988C21.25 11.3999 21.25 15.8399 18.52 18.5699C17.15 19.9399 15.36 20.6199 13.57 20.6199C12.6 20.6199 11.63 20.4099 10.73 20.0099L9.23999 21.4999C10.59 22.2399 12.08 22.6199 13.57 22.6199C15.87 22.6199 18.18 21.7399 19.93 19.9799C23.45 16.4699 23.45 10.7699 19.93 7.25988Z" />
    </Svg>
  )
}

Icon.displayName = 'Rotate90DegreesCcw'

/**
 * Material Icon: Rotate 90 Degrees Ccw
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:rotate_90_degrees_ccw Material Icon Docs}
 */
export const Rotate90DegreesCcw = memo(Icon)
