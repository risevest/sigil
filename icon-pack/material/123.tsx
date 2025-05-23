import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.25 15H5.75V10.5H4.25V9H7.25V15ZM13.75 13.5H10.75V12.5H12.75C13.3 12.5 13.75 12.05 13.75 11.5V10C13.75 9.45 13.3 9 12.75 9H9.25V10.5H12.25V11.5H10.25C9.7 11.5 9.25 11.95 9.25 12.5V15H13.75V13.5ZM19.75 14V10C19.75 9.45 19.3 9 18.75 9H15.25V10.5H18.25V11.5H16.25V12.5H18.25V13.5H15.25V15H18.75C19.3 15 19.75 14.55 19.75 14Z" />
    </Svg>
  )
}

Icon.displayName = 'Mi123'

/**
 * Material Icon: 123
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:123 Material Icon Docs}
 */
export const Mi123 = memo(Icon)
