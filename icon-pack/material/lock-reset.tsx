import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.6199 3C8.64988 3 4.61988 7.03 4.61988 12C4.61988 12.06 4.62988 12.12 4.62988 12.19L2.78988 10.35L1.37988 11.76L5.61988 16L9.85988 11.76L8.44988 10.35L6.62988 12.17C6.62988 12.11 6.61988 12.06 6.61988 12C6.61988 8.14 9.75988 5 13.6199 5C17.4799 5 20.6199 8.14 20.6199 12C20.6199 15.86 17.4799 19 13.6199 19C11.7199 19 9.99988 18.24 8.73988 17.01L7.31988 18.42C8.93988 20.01 11.1699 21 13.6199 21C18.5899 21 22.6199 16.97 22.6199 12C22.6199 7.03 18.5899 3 13.6199 3ZM15.6199 11V10C15.6199 8.9 14.7199 8 13.6199 8C12.5199 8 11.6199 8.9 11.6199 10V11C11.0699 11 10.6199 11.45 10.6199 12V15C10.6199 15.55 11.0699 16 11.6199 16H15.6199C16.1699 16 16.6199 15.55 16.6199 15V12C16.6199 11.45 16.1699 11 15.6199 11ZM14.6199 11H12.6199V10C12.6199 9.45 13.0699 9 13.6199 9C14.1699 9 14.6199 9.45 14.6199 10V11Z" />
    </Svg>
  )
}

Icon.displayName = 'LockReset'

/**
 * Material Icon: Lock Reset
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:lock_reset Material Icon Docs}
 */
export const LockReset = memo(Icon)
