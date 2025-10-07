import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="m21.238 17-1.732 3a2 2 0 0 1-1.569.993l-.164.007H6.226q-.375-.001-.716-.133l-.165-.072L7.535 17zM8.577 3.339l2.268 3.929-6.85 11.866L2.184 16a2 2 0 0 1 0-2L7.958 4c.156-.27.369-.494.619-.661M14.309 3a2 2 0 0 1 1.645.861L16.04 4l5.774 10c.149.258.236.54.26.828l.008.172h-4.464L10.69 3zM12 9.268 15.31 15H8.69z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'DriveFill'
/**
 * MingCute Icon: Drive Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const DriveFill = Icon
