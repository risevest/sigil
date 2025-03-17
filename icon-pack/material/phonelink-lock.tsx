import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M18.5 1H8.5C7.4 1 6.5 1.9 6.5 3V6H8.5V4H18.5V20H8.5V18H6.5V21C6.5 22.1 7.4 23 8.5 23H18.5C19.6 23 20.5 22.1 20.5 21V3C20.5 1.9 19.6 1 18.5 1ZM10.3 11V9.5C10.3 8.1 8.9 7 7.5 7C6.1 7 4.7 8.1 4.7 9.5V11C4.1 11 3.5 11.6 3.5 12.2V15.7C3.5 16.4 4.1 17 4.7 17H10.2C10.9 17 11.5 16.4 11.5 15.8V12.3C11.5 11.6 10.9 11 10.3 11ZM9 11H6V9.5C6 8.7 6.7 8.2 7.5 8.2C8.3 8.2 9 8.7 9 9.5V11Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'PhonelinkLock'

/**
 * Material Icon: Phonelink Lock
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:phonelink_lock Material Icon Docs}
 */
export const PhonelinkLock = memo(Icon)
