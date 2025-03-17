import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.75 10.35V9C17.75 7.34 16.41 6 14.75 6H9.25C7.59 6 6.25 7.34 6.25 9V10.35C5.51 10.78 5 11.58 5 12.5V16C5 17.1 5.9 18 7 18H17C18.1 18 19 17.1 19 16V12.5C19 11.58 18.49 10.78 17.75 10.35ZM9.25 7.5H14.75C15.58 7.5 16.25 8.17 16.25 9V10.03C14.99 10.15 14 11.2 14 12.5V13H10V12.5C10 11.2 9.01 10.15 7.75 10.03V9C7.75 8.17 8.42 7.5 9.25 7.5ZM17.5 16C17.5 16.28 17.28 16.5 17 16.5H7C6.72 16.5 6.5 16.28 6.5 16V12.5C6.5 11.95 6.95 11.5 7.5 11.5C8.05 11.5 8.5 11.95 8.5 12.5V14.5H15.5V12.5C15.5 11.95 15.95 11.5 16.5 11.5C17.05 11.5 17.5 11.95 17.5 12.5V16ZM20 4V20H4V4H20ZM20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2Z" />
    </Svg>
  )
}

Icon.displayName = 'Living'

/**
 * Material Icon: Living
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:living Material Icon Docs}
 */
export const Living = memo(Icon)
