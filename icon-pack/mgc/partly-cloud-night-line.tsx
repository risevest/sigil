import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M13.406 4.015c1.06.184 2.05.574 2.925 1.127a2.526 2.526 0 0 1 4.249.294 2.388 2.388 0 0 1-.713 4.56 8.112 8.112 0 0 1-7.86 10.123l-.183-.002A3.49 3.49 0 0 1 9.5 21H5a3 3 0 0 1-1.483-5.608 3.75 3.75 0 0 1 5.658-2.86 5.226 5.226 0 0 0 3.148-7.12 1 1 0 0 1 1.083-1.397M7.25 14a1.75 1.75 0 0 0-1.75 1.75l.003.1.008.098a1 1 0 0 1-.644 1.048l-.11.033A1 1 0 0 0 5 19h4.5c.464 0 .879-.21 1.155-.543a1.501 1.501 0 0 0-.78-2.41l-.13-.027a1 1 0 0 1-.805-.727A1.752 1.752 0 0 0 7.25 14m7.46-7.477a7.223 7.223 0 0 1-4.09 7.583l.045.093a3.5 3.5 0 0 1 2.293 3.846A6.114 6.114 0 0 0 14.71 6.523m3.651-.403a.528.528 0 0 0-.475.297 8.138 8.138 0 0 1 1.181 1.592h.544a.389.389 0 0 0 .064-.772 1 1 0 0 1-.762-.605l-.042-.122a.528.528 0 0 0-.51-.39"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'PartlyCloudNightLine'

/**
 * MingCute Icon: Partly Cloud Night Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const PartlyCloudNightLine = memo(Icon)
