import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 3a1 1 0 0 1 1 1v5h5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-5H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H5v8h4v-3a1 1 0 0 1 1-1h3z" />
    </Svg>
  )
})
Icon.displayName = 'SendBackward'
/**
 * Remix Icon: Send Backward
 * @see {@link https://remixicon.com/icon/send-backward Remix Icon Docs}
 */
export const SendBackward = Icon
