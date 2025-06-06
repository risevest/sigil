import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="nonzero">
        <Path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092Z" />
        <Path
          fill={color}
          d="M11 12H8a1 1 0 0 0-1 1v2H5.205c-1.336 0-2.005 1.615-1.06 2.56l2.85 2.852v.002l1.94 1.94c.293.293.678.44 1.062.44.385 0 .769-.147 1.062-.44l1.94-1.94v-.002l2.85-2.852c.945-.945.276-2.56-1.06-2.56h-1.793v-.997h.002v-2h2.998a1 1 0 0 0 1-1v-2h1.793c1.336 0 2.005-1.615 1.06-2.56L17 3.59v-.003l-1.94-1.94a1.496 1.496 0 0 0-1.062-.439c-.384 0-.769.146-1.062.44l-1.94 1.94v.002l-2.85 2.852c-.945.945-.276 2.56 1.06 2.56H11V12Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'TransferVerticalFill'

/**
 * MingCute Icon: Transfer Vertical Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TransferVerticalFill = memo(Icon)
