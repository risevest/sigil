import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 15.7252C18.76 15.7252 17.55 15.5252 16.43 15.1552C16.33 15.1152 16.22 15.1052 16.12 15.1052C15.86 15.1052 15.61 15.2052 15.41 15.3952L13.21 17.5952C10.38 16.1452 8.06 13.8352 6.62 11.0052L8.82 8.80516C9.1 8.52516 9.18 8.13516 9.07 7.78516C8.7 6.66516 8.5 5.46516 8.5 4.21516C8.5 3.66516 8.05 3.21516 7.5 3.21516H4C3.45 3.21516 3 3.66516 3 4.21516C3 13.6052 10.61 21.2152 20 21.2152C20.55 21.2152 21 20.7652 21 20.2152V16.7252C21 16.1752 20.55 15.7252 20 15.7252ZM5.03 5.21516H6.53C6.6 6.10516 6.75 6.97516 6.99 7.80516L5.79 9.00516C5.38 7.80516 5.12 6.53516 5.03 5.21516ZM19 19.1852C17.68 19.0952 16.41 18.8352 15.2 18.4352L16.39 17.2452C17.24 17.4852 18.11 17.6352 18.99 17.6952V19.1852H19ZM18 9.21516H15.41L20.43 4.19516L19.02 2.78516L14 7.80516V5.21516H12V11.2152H18V9.21516Z" />
    </Svg>
  )
}

Icon.displayName = 'PhoneCallback'

/**
 * Material Icon: Phone Callback
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:phone_callback Material Icon Docs}
 */
export const PhoneCallback = memo(Icon)
