import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m17.285 10.668 5.215 3.323-5.252 3.346L12 13.993l-5.248 3.344L1.5 13.99l5.215-3.323L1.5 7.346 6.752 4 12 7.343 17.248 4 22.5 7.346zm-.074 0L12 7.348l-5.211 3.32L12 13.988zM6.786 18.446l5.252-3.346 5.252 3.346-5.252 3.346z" />
    </Svg>
  )
})
Icon.displayName = 'DropboxFill'
/**
 * Remix Icon: Dropbox Fill
 * @see {@link https://remixicon.com/icon/dropbox-fill Remix Icon Docs}
 */
export const DropboxFill = Icon
