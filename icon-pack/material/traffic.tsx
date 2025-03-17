import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 10H17V8.86C18.72 8.41 20 6.86 20 5H17V4C17 3.45 16.55 3 16 3H8C7.45 3 7 3.45 7 4V5H4C4 6.86 5.28 8.41 7 8.86V10H4C4 11.86 5.28 13.41 7 13.86V15H4C4 16.86 5.28 18.41 7 18.86V20C7 20.55 7.45 21 8 21H16C16.55 21 17 20.55 17 20V18.86C18.72 18.41 20 16.86 20 15H17V13.86C18.72 13.41 20 11.86 20 10ZM15 19H9V5H15V19ZM12 18C12.83 18 13.5 17.33 13.5 16.5C13.5 15.67 12.83 15 12 15C11.17 15 10.5 15.67 10.5 16.5C10.5 17.33 11.17 18 12 18ZM12 13.5C12.83 13.5 13.5 12.83 13.5 12C13.5 11.17 12.83 10.5 12 10.5C11.17 10.5 10.5 11.17 10.5 12C10.5 12.83 11.17 13.5 12 13.5ZM12 9C12.83 9 13.5 8.33 13.5 7.5C13.5 6.67 12.83 6 12 6C11.17 6 10.5 6.67 10.5 7.5C10.5 8.33 11.17 9 12 9Z" />
    </Svg>
  )
}

Icon.displayName = 'Traffic'

/**
 * Material Icon: Traffic
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:traffic Material Icon Docs}
 */
export const Traffic = memo(Icon)
