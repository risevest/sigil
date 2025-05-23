import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M19.5 15.51C18.26 15.51 17.05 15.31 15.93 14.94C15.83 14.9 15.72 14.89 15.62 14.89C15.36 14.89 15.11 14.99 14.91 15.18L12.71 17.38C9.88 15.93 7.56 13.62 6.12 10.79L8.32 8.59C8.6 8.31 8.68 7.92 8.57 7.57C8.2 6.45 8 5.25 8 4C8 3.45 7.55 3 7 3H3.5C2.95 3 2.5 3.45 2.5 4C2.5 13.39 10.11 21 19.5 21C20.05 21 20.5 20.55 20.5 20V16.51C20.5 15.96 20.05 15.51 19.5 15.51ZM4.53 5H6.03C6.1 5.89 6.25 6.76 6.49 7.59L5.29 8.79C4.88 7.59 4.62 6.32 4.53 5ZM18.5 18.97C17.18 18.88 15.91 18.62 14.7 18.22L15.89 17.03C16.74 17.27 17.61 17.42 18.49 17.48V18.97H18.5Z"
        fill={color}
      />
      <Path
        d="M21.5 4.95C21.29 4.78 19.17 3 16 3C12.82 3 10.71 4.78 10.5 4.95L16 12L21.5 4.95Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'WifiCalling'

/**
 * Material Icon: Wifi Calling
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wifi_calling Material Icon Docs}
 */
export const WifiCalling = memo(Icon)
