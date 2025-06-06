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
          d="M19.071 3.93a1 1 0 0 1 .993.883l.007.116v5.657a1 1 0 0 1-.315.729l-.09.075-7.198 5.32.946.947a1 1 0 0 1 .084 1.32l-.084.094L12 20.485a1 1 0 0 1-1.036.238l-.118-.05-2.184-1.092-1.612 1.612a1 1 0 0 1-1.32.083l-.094-.083-2.828-2.829a1 1 0 0 1-.083-1.32l.083-.094 1.611-1.612-1.091-2.183a1 1 0 0 1 .102-1.059L3.515 12l1.414-1.414a1 1 0 0 1 1.32-.083l.094.083.947.947 5.32-7.198a1 1 0 0 1 .687-.399l.117-.007h5.657ZM5.636 12.706l-.197.198 1.092 2.184a1 1 0 0 1-.188 1.154L4.93 17.657l1.414 1.414 1.415-1.414a1 1 0 0 1 1.154-.187l2.184 1.092.197-.198-5.657-5.657ZM18.071 5.93H13.92l-5.2 7.033 2.318 2.317 7.033-5.198z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'SwordLine'

/**
 * MingCute Icon: Sword Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SwordLine = memo(Icon)
