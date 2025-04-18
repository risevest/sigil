import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 8.5H18V3.5H8V8.5H7.22C6.67 7.89 5.89 7.5 5 7.5C3.34 7.5 2 8.84 2 10.5V17.5C2 19.16 3.34 20.5 5 20.5C5.89 20.5 6.67 20.11 7.22 19.5H22V11.5C22 9.84 20.66 8.5 19 8.5ZM6 17.5C6 18.05 5.55 18.5 5 18.5C4.45 18.5 4 18.05 4 17.5V10.5C4 9.95 4.45 9.5 5 9.5C5.55 9.5 6 9.95 6 10.5V17.5ZM10 5.5H16V8.5H10V5.5ZM20 17.5H8V10.5H19C19.55 10.5 20 10.95 20 11.5V17.5Z" />
      <Path d="M15 13.5C15.5523 13.5 16 13.0523 16 12.5C16 11.9477 15.5523 11.5 15 11.5C14.4477 11.5 14 11.9477 14 12.5C14 13.0523 14.4477 13.5 15 13.5Z" />
      <Path d="M18 13.5C18.5523 13.5 19 13.0523 19 12.5C19 11.9477 18.5523 11.5 18 11.5C17.4477 11.5 17 11.9477 17 12.5C17 13.0523 17.4477 13.5 18 13.5Z" />
      <Path d="M15 16.5C15.5523 16.5 16 16.0523 16 15.5C16 14.9477 15.5523 14.5 15 14.5C14.4477 14.5 14 14.9477 14 15.5C14 16.0523 14.4477 16.5 15 16.5Z" />
      <Path d="M18 16.5C18.5523 16.5 19 16.0523 19 15.5C19 14.9477 18.5523 14.5 18 14.5C17.4477 14.5 17 14.9477 17 15.5C17 16.0523 17.4477 16.5 18 16.5Z" />
      <Path d="M13 11.5H9V16.5H13V11.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Fax'

/**
 * Material Icon: Fax
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:fax Material Icon Docs}
 */
export const Fax = memo(Icon)
