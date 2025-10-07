import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.58a1 1 0 0 1 .292-.707l1.562-1.567A.5.5 0 0 0 6 9.793V3a1 1 0 0 1 1-1m8 2v4h2V4zm-3 0v4h2V4zM9 4v4h2V4z" />
    </Svg>
  )
})
Icon.displayName = 'SdCardMiniFill'
/**
 * Remix Icon: Sd Card Mini Fill
 * @see {@link https://remixicon.com/icon/sd-card-mini-fill Remix Icon Docs}
 */
export const SdCardMiniFill = Icon
