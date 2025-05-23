import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.1 7.40039V11.4004H16.1V13.4004H13.1V5.40039H15.1L12.1 1.40039L9.09999 5.40039H11.1V13.4004H8.09999V11.3304C8.79999 10.9604 9.29999 10.2504 9.29999 9.40039C9.29999 8.19039 8.30999 7.20039 7.09999 7.20039C5.88999 7.20039 4.89999 8.19039 4.89999 9.40039C4.89999 10.2504 5.39999 10.9604 6.09999 11.3304V13.4004C6.09999 14.5104 6.98999 15.4004 8.09999 15.4004H11.1V18.4504C10.39 18.8204 9.89999 19.5504 9.89999 20.4004C9.89999 21.6204 10.89 22.6004 12.1 22.6004C13.31 22.6004 14.3 21.6204 14.3 20.4004C14.3 19.5504 13.81 18.8204 13.1 18.4504V15.4004H16.1C17.21 15.4004 18.1 14.5104 18.1 13.4004V11.4004H19.1V7.40039H15.1Z" />
    </Svg>
  )
}

Icon.displayName = 'Usb'

/**
 * Material Icon: Usb
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:usb Material Icon Docs}
 */
export const Usb = memo(Icon)
