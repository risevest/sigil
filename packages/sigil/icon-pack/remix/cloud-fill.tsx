import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 7a8 8 0 0 0-7.493 5.19l1.874.703A6.002 6.002 0 0 1 23 15a6 6 0 0 1-6 6H7A6 6 0 0 1 5.008 9.339a7 7 0 0 1 13.757-2.143A8 8 0 0 0 17 7" />
    </Svg>
  )
})
Icon.displayName = 'CloudFill'
/**
 * Remix Icon: Cloud Fill
 * @see {@link https://remixicon.com/icon/cloud-fill Remix Icon Docs}
 */
export const CloudFill = Icon
