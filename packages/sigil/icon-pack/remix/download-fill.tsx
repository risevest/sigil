import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 19h18v2H3zM13 9h7l-8 8-8-8h7V1h2z" />
    </Svg>
  )
})
Icon.displayName = 'DownloadFill'
/**
 * Remix Icon: Download Fill
 * @see {@link https://remixicon.com/icon/download-fill Remix Icon Docs}
 */
export const DownloadFill = Icon
