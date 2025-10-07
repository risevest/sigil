import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm7.707 4.707L12 13.414 10.586 12l5.707-5.707L13 3h8v8z" />
    </Svg>
  )
})
Icon.displayName = 'ShareBoxFill'
/**
 * Remix Icon: Share Box Fill
 * @see {@link https://remixicon.com/icon/share-box-fill Remix Icon Docs}
 */
export const ShareBoxFill = Icon
