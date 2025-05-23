import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M6 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6m13 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6M6 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2m13 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M18 2a1 1 0 1 1 0 2h-.69l2.651 9.724A1.01 1.01 0 0 1 18.987 15h-.756a2.61 2.61 0 0 0-2.334 1.442c-.171.342-.52.558-.903.558h-4.166c-1.143 0-1.902-.66-2.656-1.414A2 2 0 0 0 6.757 15H5a1 1 0 1 1 0-2h1.757a4 4 0 0 1 2.829 1.172l.29.303c.264.273.554.525.952.525h3.603a4.61 4.61 0 0 1 3.268-1.97L15.236 4H14a1 1 0 1 1 0-2z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ScooterLine'

/**
 * MingCute Icon: Scooter Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ScooterLine = memo(Icon)
