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
          d="M4 7.504v8.993C5.653 15.879 8.599 15 12 15s6.347.88 8 1.497V7.504C18.347 8.12 15.401 9 12 9s-6.347-.879-8-1.496m-2-.695c0-1.12 1.15-1.805 2.119-1.407C5.437 5.945 8.465 7 12 7s6.563-1.055 7.881-1.598C20.85 5.004 22 5.69 22 6.81v10.382c0 1.12-1.15 1.805-2.119 1.407C18.563 18.056 15.535 17 12 17s-6.563 1.056-7.881 1.598C3.15 18.996 2 18.31 2 17.19z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'PanoramasLine'
/**
 * MingCute Icon: Panoramas Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const PanoramasLine = Icon
