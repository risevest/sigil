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
          d="M12.72 2.04a1 1 0 0 1 1.124.423l7 11A1 1 0 0 1 20 15h-7a1 1 0 0 1-1-1V3a1 1 0 0 1 .72-.96M14 6.434V13h4.178zM3.19 16.415A1 1 0 0 1 4 16h16a1 1 0 0 1 .949 1.316 7.4 7.4 0 0 1-.867 1.739C19.542 19.865 18.531 21 17 21H7c-1.53 0-2.542-1.135-3.082-1.945a7.431 7.431 0 0 1-.866-1.737 1.01 1.01 0 0 1 .137-.903ZM5.619 18c.45.654.925 1 1.381 1h10c.457 0 .932-.346 1.381-1H5.62ZM9.152 5.47A1 1 0 0 1 11 6v8a1 1 0 0 1-1 1H5a1 1 0 0 1-.848-1.53zM9 13V9.487L6.804 13z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'SailboatLine'

/**
 * MingCute Icon: Sailboat Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SailboatLine = memo(Icon)
