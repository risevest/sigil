import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg height={size} width={size} {...otherProps}>
      <G fill={color} fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M19 4a3 3 0 0 1 .176 5.995L19 10h-1.52l-7.099 8.874a3 3 0 0 1-2.148 1.12L8.04 20H5a3 3 0 0 1-.176-5.995L5 14h1.52l7.099-8.874a3 3 0 0 1 2.148-1.12L15.96 4zM5.293 3.464a1 1 0 0 1 1.32-.083l.094.083L8.83 5.586a1 1 0 0 1-1.32 1.497L7.414 7 7 6.586v3.242a1 1 0 0 1-1.993.117L5 9.828V6.586L4.586 7a1 1 0 0 1-1.497-1.32l.083-.094z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'EscalatorUpFill'

/**
 * MingCute Icon: Escalator_up_fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const EscalatorUpFill = memo(Icon)
