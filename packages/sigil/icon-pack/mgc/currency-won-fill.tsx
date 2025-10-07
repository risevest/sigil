import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M8.97 8.757a1 1 0 0 0-1.94.486l.19.757H7a1 1 0 1 0 0 2h.72l.25 1H7a1 1 0 1 0 0 2h1.47l.477 1.91c.266 1.067 1.762 1.125 2.11.08L12 14.162l.943 2.828c.348 1.045 1.844.987 2.11-.08l.478-1.91H17a1 1 0 1 0 0-2h-.97l.25-1H17a1 1 0 1 0 0-2h-.22l.19-.757a1 1 0 1 0-1.94-.486l-1.167 4.669-.914-2.742a1 1 0 0 0-1.898 0l-.914 2.742z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'CurrencyWonFill'
/**
 * MingCute Icon: Currency Won Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CurrencyWonFill = Icon
