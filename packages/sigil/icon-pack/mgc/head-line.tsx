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
          d="M5 10a8 8 0 1 1 13 6.245V20.5a1.5 1.5 0 0 1-1.5 1.5h-5a1.5 1.5 0 0 1-1.5-1.5V19H8.766a3 3 0 0 1-2.977-2.628l-.14-1.123-.747-.149a1.5 1.5 0 0 1-1.09-2.048l1.19-2.858zm8-6a6 6 0 0 0-5.996 6.226c.008.21-.027.43-.115.64l-.997 2.393.502.1a1.5 1.5 0 0 1 1.194 1.285l.185 1.48a1 1 0 0 0 .993.876H10.5a1.5 1.5 0 0 1 1.5 1.5V20h4v-3.994c0-.497.244-.937.609-1.212A6 6 0 0 0 13 4"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'HeadLine'
/**
 * MingCute Icon: Head Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const HeadLine = Icon
