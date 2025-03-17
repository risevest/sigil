import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.525 5.30988V15.8099L21.475 17.7599C21.505 17.6099 21.525 17.4599 21.525 17.3099V5.30988C21.525 4.20988 20.625 3.30988 19.525 3.30988H7.02498L9.02498 5.30988H19.525Z" />
      <Path d="M3.74498 2.62988L2.47498 3.89988L3.52498 4.94988V17.3099C3.52498 18.4099 4.42498 19.3099 5.52498 19.3099H17.885L19.945 21.3699L21.215 20.0999L3.74498 2.62988ZM5.52498 17.3099V6.94988L15.885 17.3099H5.52498Z" />
    </Svg>
  )
}

Icon.displayName = 'BrowserNotSupported'

/**
 * Material Icon: Browser Not Supported
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:browser_not_supported Material Icon Docs}
 */
export const BrowserNotSupported = memo(Icon)
