import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 16v4h4v2H2v-6zm18 0v6h-6v-2h4v-4zM7.5 7a4.5 4.5 0 0 0 9 0h2a6.5 6.5 0 0 1-3.499 5.767L15 19H9v-6.232A6.5 6.5 0 0 1 5.5 7zM12 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M8 2v2l-4-.001V8H2V2zm14 0v6h-2V4h-4V2z" />
    </Svg>
  )
})
Icon.displayName = 'BodyScanFill'
/**
 * Remix Icon: Body Scan Fill
 * @see {@link https://remixicon.com/icon/body-scan-fill Remix Icon Docs}
 */
export const BodyScanFill = Icon
