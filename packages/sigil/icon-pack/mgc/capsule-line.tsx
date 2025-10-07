import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12.707 4.222a6 6 0 0 0-8.485 8.485l7.07 7.072a6 6 0 0 0 8.486-8.486L18.364 9.88l-.033-.032-5.624-5.625Zm1.08 3.909-2.494-2.495a4 4 0 1 0-5.657 5.657l2.495 2.495a5.98 5.98 0 0 1 1.748-3.91 5.98 5.98 0 0 1 3.908-1.747m-1.08 10.233a4 4 0 0 0 5.657-5.657l-1.44-1.44a4 4 0 0 0-5.631 5.683z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'CapsuleLine'
/**
 * MingCute Icon: Capsule Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CapsuleLine = Icon
