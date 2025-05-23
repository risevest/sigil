import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M17.46 5C17.4 5.89 17.25 6.76 17.01 7.59L18.21 8.79C18.62 7.59 18.88 6.32 18.97 5H17.46ZM7.6 17.02C6.75 17.26 5.88 17.41 5 17.47V18.96C6.32 18.87 7.59 18.61 8.8 18.21L7.6 17.02ZM16.5 3H20C20.55 3 21 3.45 21 4C21 13.39 13.39 21 4 21C3.45 21 3 20.55 3 20V16.51C3 15.96 3.45 15.51 4 15.51C5.24 15.51 6.45 15.31 7.57 14.94C7.67 14.9 7.78 14.89 7.88 14.89C8.14 14.89 8.39 14.99 8.59 15.18L10.79 17.38C13.62 15.93 15.94 13.62 17.38 10.79L15.18 8.59C14.9 8.31 14.82 7.92 14.93 7.57C15.3 6.45 15.5 5.25 15.5 4C15.5 3.45 15.95 3 16.5 3Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'PhoneEnabled'

/**
 * Material Icon: Phone Enabled
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:phone_enabled Material Icon Docs}
 */
export const PhoneEnabled = memo(Icon)
