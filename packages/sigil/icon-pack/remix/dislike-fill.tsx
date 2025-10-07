import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m2.808 1.393 18.385 18.385-1.415 1.414-3.746-3.747L12 21.485l-8.478-8.492a6 6 0 0 1 .033-8.023L1.394 2.808zm17.435 3.364a6 6 0 0 1 .236 8.236l-1.635 1.636L7.26 3.046a6 6 0 0 1 4.741 1.483 6 6 0 0 1 8.242.228" />
    </Svg>
  )
})
Icon.displayName = 'DislikeFill'
/**
 * Remix Icon: Dislike Fill
 * @see {@link https://remixicon.com/icon/dislike-fill Remix Icon Docs}
 */
export const DislikeFill = Icon
