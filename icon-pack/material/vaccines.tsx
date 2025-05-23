import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.5 5.25H8.5V3.75H9C9.55 3.75 10 3.3 10 2.75C10 2.2 9.55 1.75 9 1.75H6C5.45 1.75 5 2.2 5 2.75C5 3.3 5.45 3.75 6 3.75H6.5V5.25H3.5C2.95 5.25 2.5 5.7 2.5 6.25C2.5 6.8 2.95 7.25 3.5 7.25V14.75C3.5 15.85 4.4 16.75 5.5 16.75H6.5V20.75L8.5 22.25V16.75H9.5C10.6 16.75 11.5 15.85 11.5 14.75V7.25C12.05 7.25 12.5 6.8 12.5 6.25C12.5 5.7 12.05 5.25 11.5 5.25ZM9.5 8.75H7.75C7.34 8.75 7 9.09 7 9.5C7 9.91 7.34 10.25 7.75 10.25H9.5V11.75H7.75C7.34 11.75 7 12.09 7 12.5C7 12.91 7.34 13.25 7.75 13.25H9.5V14.75H5.5V7.25H9.5V8.75ZM20 10.25V9.75C20.55 9.75 21 9.3 21 8.75C21 8.2 20.55 7.75 20 7.75H15C14.45 7.75 14 8.2 14 8.75C14 9.3 14.45 9.75 15 9.75V10.25C15 10.75 13.5 11.41 13.5 13.25V19.75C13.5 20.85 14.4 21.75 15.5 21.75H19.5C20.6 21.75 21.5 20.85 21.5 19.75V13.25C21.5 11.41 20 10.75 20 10.25ZM17 10.25V9.75H18V10.25C18 11.85 19.5 12.25 19.5 13.25V13.75H15.5C15.5 13.54 15.5 13.36 15.5 13.25C15.5 12.25 17 11.85 17 10.25ZM19.5 15.25V16.75H15.5C15.5 16.24 15.5 15.73 15.5 15.25H19.5ZM15.5 19.75C15.5 19.75 15.5 19.12 15.5 18.25H19.5V19.75H15.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Vaccines'

/**
 * Material Icon: Vaccines
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:vaccines Material Icon Docs}
 */
export const Vaccines = memo(Icon)
