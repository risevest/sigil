import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 10H6V6H2V10ZM8 22H12V18H8V22ZM2 22H6V18H2V22ZM2 16H6V12H2V16ZM8 16H12V12H8V16ZM14 22H18V18H14V22ZM17 2C14.24 2 12 4.24 12 7C12 9.76 14.24 12 17 12C19.76 12 22 9.76 22 7C22 4.24 19.76 2 17 2ZM17.5 10H16.5V9H17.5V10ZM17.5 8H16.5V4H17.5V8ZM14 16H18V13.93C17.67 13.98 17.34 14 17 14C15.93 14 14.91 13.76 14 13.32V16ZM8 6V10H10.68C10.24 9.09 10 8.07 10 7C10 6.66 10.02 6.33 10.07 6H8Z" />
    </Svg>
  )
}

Icon.displayName = 'AppsOutage'

/**
 * Material Icon: Apps Outage
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:apps_outage Material Icon Docs}
 */
export const AppsOutage = memo(Icon)
