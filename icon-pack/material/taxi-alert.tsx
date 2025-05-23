import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 17.5C6.82843 17.5 7.5 16.8284 7.5 16C7.5 15.1716 6.82843 14.5 6 14.5C5.17157 14.5 4.5 15.1716 4.5 16C4.5 16.8284 5.17157 17.5 6 17.5Z" />
      <Path d="M15 17.5C15.8284 17.5 16.5 16.8284 16.5 16C16.5 15.1716 15.8284 14.5 15 14.5C14.1716 14.5 13.5 15.1716 13.5 16C13.5 16.8284 14.1716 17.5 15 17.5Z" />
      <Path d="M17.5 13.5V18.5H3.5V13.5H17.5C15.59 13.5 13.87 12.74 12.61 11.5H4.31L5.35 8.5H10.79C10.6 7.87 10.5 7.2 10.5 6.5C10.5 5.8 10.6 5.13 10.79 4.5H7.5V6.5H5C4.34 6.5 3.79 6.92 3.58 7.51L1.5 13.5V21.5C1.5 22.05 1.95 22.5 2.5 22.5H3.5C4.05 22.5 4.5 22.05 4.5 21.5V20.5H16.5V21.5C16.5 22.05 16.95 22.5 17.5 22.5H18.5C19.05 22.5 19.5 22.05 19.5 21.5V13.5L19.41 13.23C18.8 13.4 18.16 13.5 17.5 13.5Z" />
      <Path d="M17.5 1.5C14.74 1.5 12.5 3.74 12.5 6.5C12.5 9.26 14.74 11.5 17.5 11.5C20.26 11.5 22.5 9.26 22.5 6.5C22.5 3.74 20.26 1.5 17.5 1.5ZM18 9.5H17V8.5H18V9.5ZM18 7.5H17V3.5H18V7.5Z" />
    </Svg>
  )
}

Icon.displayName = 'TaxiAlert'

/**
 * Material Icon: Taxi Alert
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:taxi_alert Material Icon Docs}
 */
export const TaxiAlert = memo(Icon)
