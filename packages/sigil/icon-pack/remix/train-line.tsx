import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TrainLine = /* @__PURE__ */ memo(function TrainLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m17.2 20 1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v11a2 2 0 0 1-2 2zM7 5a2 2 0 0 0-2 2v11h14V7a2 2 0 0 0-2-2zm5 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4M6 7h12v4H6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Train Line
 * @see {@link https://remixicon.com/icon/train-line Remix Icon Docs}
 */
export { TrainLine }
