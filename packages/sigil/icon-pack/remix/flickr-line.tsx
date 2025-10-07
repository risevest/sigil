import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 17A5 5 0 1 0 6 7a5 5 0 0 0 0 10m3-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m9 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10m3-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
    </Svg>
  )
})
Icon.displayName = 'FlickrLine'
/**
 * Remix Icon: Flickr Line
 * @see {@link https://remixicon.com/icon/flickr-line Remix Icon Docs}
 */
export const FlickrLine = Icon
