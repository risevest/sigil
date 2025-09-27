import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0m12 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0" />
    </Svg>
  )
})
Icon.displayName = 'FlickrFill'
/**
 * Remix Icon: Flickr Fill
 * @see {@link https://remixicon.com/icon/flickr-fill Remix Icon Docs}
 */
export const FlickrFill = Icon
