import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 8.33C13.85 8.03 14.53 7.35 14.83 6.5H18L15 13.5C15 15.16 16.57 16.5 18.5 16.5C20.43 16.5 22 15.16 22 13.5L19 6.5H21V4.5H14.83C14.42 3.33 13.31 2.5 12 2.5C10.69 2.5 9.58 3.33 9.17 4.5H3V6.5H5L2 13.5C2 15.16 3.57 16.5 5.5 16.5C7.43 16.5 9 15.16 9 13.5L6 6.5H9.17C9.47 7.35 10.15 8.03 11 8.33V19.5H2V21.5H22V19.5H13V8.33ZM20.37 13.5H16.63L18.5 9.14L20.37 13.5ZM7.37 13.5H3.63L5.5 9.14L7.37 13.5ZM12 6.5C11.45 6.5 11 6.05 11 5.5C11 4.95 11.45 4.5 12 4.5C12.55 4.5 13 4.95 13 5.5C13 6.05 12.55 6.5 12 6.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Balance'

/**
 * Material Icon: Balance
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:balance Material Icon Docs}
 */
export const Balance = memo(Icon)
