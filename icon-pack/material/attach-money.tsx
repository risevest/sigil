import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.39 10.9C10.12 10.31 9.39 9.7 9.39 8.75C9.39 7.66 10.4 6.9 12.09 6.9C13.87 6.9 14.53 7.75 14.59 9H16.8C16.73 7.28 15.68 5.7 13.59 5.19V3H10.59V5.16C8.65 5.58 7.09 6.84 7.09 8.77C7.09 11.08 9 12.23 11.79 12.9C14.29 13.5 14.79 14.38 14.79 15.31C14.79 16 14.3 17.1 12.09 17.1C10.03 17.1 9.22 16.18 9.11 15H6.91C7.03 17.19 8.67 18.42 10.59 18.83V21H13.59V18.85C15.54 18.48 17.09 17.35 17.09 15.3C17.09 12.46 14.66 11.49 12.39 10.9Z" />
    </Svg>
  )
}

Icon.displayName = 'AttachMoney'

/**
 * Material Icon: Attach Money
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:attach_money Material Icon Docs}
 */
export const AttachMoney = memo(Icon)
