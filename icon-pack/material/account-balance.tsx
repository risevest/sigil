import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 11H5V18H7V11ZM13 11H11V18H13V11ZM21.5 20H2.5V22H21.5V20ZM19 11H17V18H19V11ZM12 4.26L17.21 7H6.79L12 4.26ZM12 2L2.5 7V9H21.5V7L12 2Z" />
    </Svg>
  )
}

Icon.displayName = 'AccountBalance'

/**
 * Material Icon: Account Balance
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:account_balance Material Icon Docs}
 */
export const AccountBalance = memo(Icon)
