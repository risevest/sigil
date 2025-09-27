import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 19h18v2H3zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.173V2h2z" />
    </Svg>
  )
})
Icon.displayName = 'DownloadLine'
/**
 * Remix Icon: Download Line
 * @see {@link https://remixicon.com/icon/download-line Remix Icon Docs}
 */
export const DownloadLine = Icon
