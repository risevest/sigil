import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.75 7.5H10.75C10.2 7.5 9.75 7.95 9.75 8.5V12.5C9.75 13.05 10.2 13.5 10.75 13.5H13.75C14.3 13.5 14.75 13.05 14.75 12.5V8.5C14.75 7.95 14.3 7.5 13.75 7.5ZM13.25 12H11.25V9H13.25V12ZM7.75 11.5V12.5C7.75 13.05 7.3 13.5 6.75 13.5H3.75C3.2 13.5 2.75 13.05 2.75 12.5V8.5C2.75 7.95 3.2 7.5 3.75 7.5H6.75C7.3 7.5 7.75 7.95 7.75 8.5V9.5H6.25V9H4.25V12H6.25V11.5H7.75ZM20.25 14H18.25V15H21.25V16.5H16.75V14C16.75 13.45 17.2 13 17.75 13H19.75V12H16.75V10.5H20.25C20.8 10.5 21.25 10.95 21.25 11.5V13C21.25 13.55 20.8 14 20.25 14Z" />
    </Svg>
  )
}

Icon.displayName = 'Co2'

/**
 * Material Icon: Co 2
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:co_2 Material Icon Docs}
 */
export const Co2 = memo(Icon)
