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
          d="M19.83 4.829a1 1 0 0 1-.26.964L17.804 7.56a3 3 0 0 1-4.243 4.242l-1.767 1.768a1 1 0 0 1-1.672-.444L9.085 9.329l-2.798 2.798L11.535 20H14a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2H9.13l-4.508-6.763a2 2 0 0 1 .25-2.524l3.606-3.606-.48-1.758a1 1 0 0 1 .258-.97l2.122-2.122a1 1 0 0 1 .97-.257l7.778 2.12a1 1 0 0 1 .703.709m-4.855 5.56a1 1 0 0 0 1.414-1.414z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'DeskLamp2Fill'

/**
 * MingCute Icon: Desk Lamp 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const DeskLamp2Fill = memo(Icon)
