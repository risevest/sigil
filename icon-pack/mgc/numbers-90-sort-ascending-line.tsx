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
          d="M5 6a3 3 0 0 1 5.995-.176L11 6.01c0 .408-.039.799-.107 1.171-.264 1.433-.964 2.58-1.57 3.352-.307.39-.598.694-.815.904-.124.12-.25.238-.385.345a1 1 0 0 1-1.34-1.479L7.118 10l.224-.228A7.153 7.153 0 0 0 7.971 9 3 3 0 0 1 5 6m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9.707-.707a1 1 0 0 0-1.414 0L13.465 7.12a1 1 0 0 0 1.414 1.415L16 7.414V20a1 1 0 1 0 2 0V7.414l1.121 1.122a1 1 0 1 0 1.415-1.415zM5 16a3 3 0 1 1 6 0v2a3 3 0 1 1-6 0zm3-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Numbers90SortAscendingLine'

/**
 * MingCute Icon: Numbers 90 Sort Ascending Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Numbers90SortAscendingLine = memo(Icon)
