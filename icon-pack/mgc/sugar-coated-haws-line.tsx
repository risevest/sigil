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
          d="M9.879 4.222a3.987 3.987 0 0 1 1.147 2.388c.873.096 1.72.479 2.388 1.148a3.985 3.985 0 0 1 1.148 2.387 4.002 4.002 0 0 1 3.006 6.008l2.21 2.211a1 1 0 1 1-1.414 1.414l-2.21-2.21a4.002 4.002 0 0 1-6.008-3.006 3.985 3.985 0 0 1-2.388-1.148 3.984 3.984 0 0 1-1.148-2.388 4 4 0 1 1 3.27-6.804Zm2.828 8.485a2 2 0 1 0 2.829 2.828 2 2 0 0 0-2.829-2.828M12 9.172a2 2 0 1 0-1.571 3.408c.195-.468.483-.907.864-1.287.38-.381.819-.669 1.287-.864A1.99 1.99 0 0 0 12 9.172M8.465 5.636a2 2 0 1 0-1.571 3.408 3.97 3.97 0 0 1 .864-1.286 3.97 3.97 0 0 1 1.286-.864 1.988 1.988 0 0 0-.58-1.258Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'SugarCoatedHawsLine'

/**
 * MingCute Icon: Sugar Coated Haws Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SugarCoatedHawsLine = memo(Icon)
