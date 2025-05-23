import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 17.5C6.82843 17.5 7.5 16.8284 7.5 16C7.5 15.1716 6.82843 14.5 6 14.5C5.17157 14.5 4.5 15.1716 4.5 16C4.5 16.8284 5.17157 17.5 6 17.5Z" />
      <Path d="M13 17.5C13.8284 17.5 14.5 16.8284 14.5 16C14.5 15.1716 13.8284 14.5 13 14.5C12.1716 14.5 11.5 15.1716 11.5 16C11.5 16.8284 12.1716 17.5 13 17.5Z" />
      <Path d="M3.5 11.5V8.5H10.79C10.6 7.87 10.5 7.2 10.5 6.5H3.93C4.76 5.79 6.91 5.41 10.58 5.52C10.68 4.82 10.88 4.15 11.17 3.53C2.47 3.17 1.5 5.52 1.5 7.5V17C1.5 17.95 1.88 18.81 2.5 19.44V21.5C2.5 22.05 2.95 22.5 3.5 22.5H4.5C5.05 22.5 5.5 22.05 5.5 21.5V20.5H13.5V21.5C13.5 22.05 13.95 22.5 14.5 22.5H15.5C16.05 22.5 16.5 22.05 16.5 21.5V19.44C17.12 18.81 17.5 17.95 17.5 17V13.5C15.59 13.5 13.87 12.74 12.61 11.5H3.5ZM15.5 16.5C15.5 17.6 14.6 18.5 13.5 18.5H5.5C4.4 18.5 3.5 17.6 3.5 16.5V13.5H15.5V16.5Z" />
      <Path d="M17.5 1.5C14.74 1.5 12.5 3.74 12.5 6.5C12.5 9.26 14.74 11.5 17.5 11.5C20.26 11.5 22.5 9.26 22.5 6.5C22.5 3.74 20.26 1.5 17.5 1.5ZM18 9.5H17V8.5H18V9.5ZM18 7.5H17V3.5H18V7.5Z" />
    </Svg>
  )
}

Icon.displayName = 'BusAlert'

/**
 * Material Icon: Bus Alert
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bus_alert Material Icon Docs}
 */
export const BusAlert = memo(Icon)
